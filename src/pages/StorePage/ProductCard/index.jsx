import React from 'react';
import {
    Product,
    ProductImage,
    ProductDescription
} from './styles';
import { FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";

const ProductCard = ({ product }) => {

    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= product.rating) {
            stars.push(<FaStar key={i} style={{ color: "#BD9334", margin: "5px 1px", fontSize:"19px" }} />);
        } else if (i === Math.ceil(product.rating)) {
            stars.push(<FaStarHalfAlt key={i} style={{ color: "#BD9334", margin: "5px 1px", fontSize:"19px" }} />);
        }else{
            stars.push(<FaRegStar key={i} style={{ color: "#BD9334", margin: "5px 1px", fontSize:"19px" }} />);
        }
    }

    return (
        <Product >
            <ProductImage>
                <img src={product.image} alt="" />
            </ProductImage>
            <ProductDescription>
                <h3>{product.name}</h3>
                <div>
                    {stars}
                </div>
                <p>R$ {product.price}</p>
            </ProductDescription>
        </Product >);
};

export default ProductCard;