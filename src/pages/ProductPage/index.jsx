import React from 'react';
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
import guy from "../../assets/p1.png";
import { IoIosStar } from "react-icons/io";
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const [size, setSize] = React.useState("p");
  const quantityRef = React.useRef(null);
  const { slug } = useParams();

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
            <img src={guy} alt="" />
          </BigMiniature>

          <MiniatureArea>
            {[...Array(3)].map((_, index) => (
              <Miniature key={index}>
                <img src={guy} alt="" />
              </Miniature>
            ))}

          </MiniatureArea>
        </LeftColumn>

        <RightColumn>
          <ProductDetailArea>
            <h4>{slug}</h4>
            <p>
              {[...Array(5)].map((_, i) => (
                <IoIosStar />
              ))}

              (5.0)
            </p>
            <Price>R$ 2.500</Price>
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
            
      </DescriptionArea>
    </div>
  );
};

export default ProductPage;