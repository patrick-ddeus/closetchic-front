import React, { useReducer, useState, useRef, useEffect } from 'react';
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
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import ClosetChicApi from '../../service/closetChic.api';
import formatStars from '../../utils/FormatStars';

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
      return { ...state, product: action.payload, loading: false };
    default:
      return { ...state, loading: false };
  }
};

const ProductPage = () => {
  const [size, setSize] = useState("p");
  const quantityRef = useRef(null);
  const { slug } = useParams();

  const [{ loading, error, product }, dispatch] =
    useReducer(reducer, {
      product: null,
      loading: false,
      error: ''
    });

  useEffect(() => {
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

  return (
    <div>
      <DescountBar />
      <Header />
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
              (5.0)
            </p>
            <Price>R$ {product?.price}</Price>
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

            <AddToCart>
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
    </div>
  );
};

export default ProductPage;