import React from 'react';
import { Container, ProductsArea, ProductCard, TitleContainer, ButtonArrow } from './styles';
import { FiShoppingCart, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import p1 from "../../../../assets/p1.png";

const FeatureProducts = () => {
  const scrollContainer = React.useRef(null);

  function scrollLeft() {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft -= 500;
    }
  }

  function scrollRight() {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += 500;
    }
  }
  return (
    <Container>
      <TitleContainer>
        <h3>Produtos em Destaque</h3>
        <div>
          <ButtonArrow onClick={scrollLeft}>
            <FiArrowLeft />
          </ButtonArrow>

          <ButtonArrow onClick={scrollRight}>
            <FiArrowRight />
          </ButtonArrow>
        </div>

      </TitleContainer>
      <ProductsArea ref={scrollContainer}>
        <ProductCard>
          <div className='productImageArea'>
            <img src={p1} alt="" />
          </div>
          <div className='productDescArea'>
            <div className="descArea">
              <p>Roupa 1</p>
              <p>R$ 150,00</p>
            </div>
            <div className='cartIconArea'>
              <FiShoppingCart />
            </div>
          </div>
        </ProductCard>

        <ProductCard>
          <div className='productImageArea'>
            <img src={p1} alt="" />
          </div>
          <div className='productDescArea'>
            <div className="descArea">
              <p>Roupa 1</p>
              <p>R$ 150,00</p>
            </div>
            <div className='cartIconArea'>
              <FiShoppingCart />
            </div>
          </div>
        </ProductCard>

        <ProductCard>
          <div className='productImageArea'>
            <img src={p1} alt="" />
          </div>
          <div className='productDescArea'>
            <div className="descArea">
              <p>Roupa 1</p>
              <p>R$ 150,00</p>
            </div>
            <div className='cartIconArea'>
              <FiShoppingCart />
            </div>
          </div>
        </ProductCard>

        <ProductCard>
          <div className='productImageArea'>
            <img src={p1} alt="" />
          </div>
          <div className='productDescArea'>
            <div className="descArea">
              <p>Roupa 1</p>
              <p>R$ 150,00</p>
            </div>
            <div className='cartIconArea'>
              <FiShoppingCart />
            </div>
          </div>
        </ProductCard>
      </ProductsArea>
      
    </Container>
  );
};

export default FeatureProducts;