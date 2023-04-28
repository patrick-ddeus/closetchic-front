import React from 'react';
import {
    Product,
    ProductImage,
    ProductDescription
} from './styles';

import formatStars from '../../../utils/FormatStars';

const ProductCard = ({ product }) => {
    return (
        <Product >
            <ProductImage>
                <img src={product.image} alt="" />
            </ProductImage>
            <ProductDescription>
                <h3>{product.name}</h3>
                <div>
                    {formatStars(product)}
                </div>
                <p>R$ {product.price}</p>
            </ProductDescription>
        </Product >);
};

export default ProductCard;