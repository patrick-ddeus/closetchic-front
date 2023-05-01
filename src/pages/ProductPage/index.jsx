import React, { useReducer, useState, useRef, useEffect, useContext } from 'react';
import {
  MainContainer,
  LeftColumn,
  RightColumn,
  BigMiniature,
  MiniatureArea,
  Miniature,
  SizeButtonArea,
  SizeButton,
  ProductDetailArea,
  SizeArea,
  Price,
  FinishOrderArea,
  Quantity,
  AddToCart,
  DescriptionArea
} from './styles';
import Header from "../../components/Header";
import DescountBar from '../../components/DescountBar';
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import ClosetChicApi from '../../service/closetChic.api';
import formatStars from '../../utils/FormatStars';
import { motion } from 'framer-motion';
import SkeletonProductPage from './Skeleton';
import { CartContext } from '../../contexts/cartContext.js';
import { UserContext } from '../../contexts/userContext.js';

const TYPES = Object.freeze({
  FETCH_REQUEST: 'FETCH_REQUEST',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR'
});

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.FETCH_REQUEST:
      return { ...state, loading: true };
    case TYPES.FETCH_SUCCESS:
      return { ...state, product: action.payload, loading: false };
    case TYPES.FETCH_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state, loading: false };
  }
};

const ProductPage = () => {
  const [size, setSize] = useState("p");
  const quantityRef = useRef(null);
  const { slug } = useParams();
  const { cart, setCart } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  const [{ loading, error, product }, dispatch] =
    useReducer(reducer, {
      product: null,
      loading: false,
      error: ''
    });

  useEffect(() => {
    window.scrollTo(0, 50);
    async function fetchProducts() {
      dispatch({ type: TYPES.FETCH_REQUEST });
      try {
        const response = await ClosetChicApi.getOneProduct(slug);
        dispatch({ type: TYPES.FETCH_SUCCESS, payload: response.product });
      } catch (error) {
        dispatch({ type: TYPES.FETCH_ERROR, payload: error.message });
      }
    }

    fetchProducts();
  }, []);

  const updateQuantity = (increment) => {
    const convertedValue = Number(quantityRef.current?.value);
    const newQuantity = increment ? convertedValue + 1 : convertedValue - 1;
    const quantity = newQuantity < 1 ? 1 : newQuantity;

    quantityRef.current.value = quantity;
  };

  const addToCart = () => {
    const { name, slug, image, price, _id } = product;
    const quantity = Number(quantityRef.current.value);
    const productToAdd = { name, slug, image, price, size, product: _id, quantity };
    console.log(cart)
    const newCart = [...cart];

    const productIndex = findProductIndex(newCart, productToAdd);

    if (productIndex > -1) {
      newCart[productIndex].quantity += quantity;
    } else {
      newCart.push(productToAdd);
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    token && ClosetChicApi.postCartProducts(newCart, token)
      .catch(err => alert(err.message));
    navigate('/cart');
  };

  const findProductIndex = (cart, productToAdd) => {
    return cart?.findIndex(({ product: productId, size: productSize }) =>
      productId === productToAdd.product && productSize === productToAdd.size
    );
  };
  return (
    <div>
      <DescountBar />
      <Header />
      {loading ? (<SkeletonProductPage />) : (
        <motion.div
          initial={{
            opacity: 0,
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.1,
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96]
            }
          }}
          exit={{
            opacity: 0,
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}>
          <MainContainer>
            <LeftColumn>
              <BigMiniature>
                <img src={product?.image} alt="" />
              </BigMiniature>

              <MiniatureArea>
                {[...Array(3)].map((_, index) => (
                  <Miniature key={index}>
                    <img src={product?.image} alt="" />
                  </Miniature>
                ))}

              </MiniatureArea>
            </LeftColumn>

            <RightColumn>
              <ProductDetailArea>
                <h4>{product?.name}</h4>
                <p>
                  <span>
                    {product && formatStars(product)}
                  </span>
                  ({product?.rating.toFixed(1)})
                </p>
                <Price>R$ {product?.price.toFixed(2).replace(".", ",")}</Price>
              </ProductDetailArea>

              <SizeArea>
                <p>Tamanhos disponíveis</p>

                <SizeButtonArea>
                  <SizeButton selected={size === "p"} onClick={() => setSize("p")}>
                    P
                  </SizeButton>
                  <SizeButton selected={size === "m"} onClick={() => setSize("m")}>
                    M
                  </SizeButton>
                  <SizeButton selected={size === "g"} onClick={() => setSize("g")}>
                    G
                  </SizeButton>
                </SizeButtonArea>
              </SizeArea>

              <FinishOrderArea>
                <Quantity>
                  <button onClick={() => updateQuantity(false)}>
                    <FiMinus />
                  </button>
                  <input type="text" disabled value={1} ref={quantityRef} />
                  <button onClick={() => updateQuantity(true)}>
                    <FiPlus />
                  </button>
                </Quantity>

                <AddToCart onClick={addToCart}>
                  Adicionar ao carrinho
                  <FiShoppingCart />
                </AddToCart>
              </FinishOrderArea>
            </RightColumn>
          </MainContainer>
          <DescriptionArea>
            <h4>Descrição</h4>
            <p>
              {product?.description}
            </p>
          </DescriptionArea>
          <Footer />
        </motion.div>
      )}

    </div>
  );
};

export default ProductPage;