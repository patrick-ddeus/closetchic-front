import { useRef, useState, useEffect } from 'react';
import { Container, ProductsArea, ProductCard, TitleContainer, ButtonArrow } from './styles';
import { FiShoppingCart, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import ClosetChicApi from '../../../../service/closetChic.api';
import { useNavigate } from 'react-router-dom';

const FeatureProducts = () => {
  const scrollContainer = useRef(null);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        const response = await ClosetChicApi.getFeaturedProducts();
        setFeaturedProducts(response.products);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFeaturedProducts();
  }, []);

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
        {featuredProducts.map(product => (
          <ProductCard key={product._id}>
            <div className='productImageArea'>
              <img src={product.image} alt="" />
            </div>
            <div className='productDescArea'>
              <div className="descArea">
                <p>{product.name.split(" ").slice(0, 2).join(" ")}</p>
                <p>R$ {product.price.toFixed(2).replace(".", ",")}</p>
              </div>
              <div className='cartIconArea' onClick={() => navigate(`/products/${product.slug}`)}>
                <FiShoppingCart />
              </div>
            </div>
          </ProductCard>
        ))}
      </ProductsArea>

    </Container>
  );
};

export default FeatureProducts;