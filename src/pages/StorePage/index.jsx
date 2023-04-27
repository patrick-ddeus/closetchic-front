import React from 'react';
import DescountBar from '../../components/DescountBar';
import Header from '../../components/Header';
import guy from "../../assets/p2.png";
import { Products, Product, ProductImage, ProductDescription} from './styles';
import Footer from '../../components/Footer';

const StorePage = () => {
    return (
        <div>
            <DescountBar />
            <Header />
            <Products>
                {[...Array(8)].map((_, i) => (
                    <Product>
                        <ProductImage>
                            <img src={guy} alt="" />
                        </ProductImage>
                        <ProductDescription>
                            <h3>Nome do produto</h3>
                            <p>R$ 150,00</p>
                        </ProductDescription>
                    </Product>
                ))}
            </Products>
            <Footer/>
        </div>
    );
};

export default StorePage;