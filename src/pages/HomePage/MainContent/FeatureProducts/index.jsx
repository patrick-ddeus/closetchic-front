import React from 'react';
import { Container, ProductsArea, ProductCard } from './styles';
import { FiShoppingCart } from "react-icons/fi";
import p1 from "../../../../assets/p1.png";

const FeatureProducts = () => {
  return (
    <Container>
      <h3>Produtos em Destaque</h3>
      <ProductsArea>
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
      <h3>aaaaaaaa</h3>
      <h3>aaaaaaaa</h3>
      <h3>aaaaaaaa</h3>
      <h3>aaaaaaaa</h3>
    </Container>
  );
};

export default FeatureProducts;