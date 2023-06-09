/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useState, useEffect } from 'react';
import DescountBar from '../../components/DescountBar';
import Header from '../../components/Header';
import { Products, PaginationArea, PaginationButton, BannerMen } from './styles';
import Footer from '../../components/Footer';
import ClosetChicApi from '../../service/closetChic.api';
import ProductCard from './ProductCard';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SkeletonStore from './Skeleton';

const MAX_ITEMS_PER_PAGE = 8;

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
            return { ...state, error: "", products: action.payload, loading: false };
        case TYPES.FETCH_ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return { ...state, loading: false };
    }
};

const StorePage = () => {
    const [{ loading, error, products }, dispatch] =
        useReducer(reducer, {
            products: [],
            loading: false,
            error: ''
        });
    const searchParams = useSearchParams();
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        async function fetchProducts() {
            dispatch({ type: TYPES.FETCH_REQUEST });
            try {
                const response = await ClosetChicApi.getProducts(`?page=${page}`);

                dispatch({ type: TYPES.FETCH_SUCCESS, payload: response.products });

                setPageCount(Math.ceil(response.count / MAX_ITEMS_PER_PAGE));
            } catch (error) {
                dispatch({ type: TYPES.FETCH_ERROR, payload: error.message });
            }
        }

        async function fetchProductsByQueryString() {
            dispatch({ type: TYPES.FETCH_REQUEST });
            try {
                const response = await ClosetChicApi.getProducts(`?q=${searchParams[0].get('q')}&page=${page}`);

                dispatch({ type: TYPES.FETCH_SUCCESS, payload: response.products });

                setPageCount(Math.ceil(response.products.length / MAX_ITEMS_PER_PAGE));
            } catch (error) {
                dispatch({ type: TYPES.FETCH_ERROR, payload: error.message });
            }
        }
        if (searchParams[0].get('q')) {
            fetchProductsByQueryString();
        } else {
            fetchProducts();
        }
    }, [page]);

    return (
        <div>
            <DescountBar />
            <Header />
            {loading ? (
                <SkeletonStore />
            ) : error ? (
                <h2>Produto não encontrado</h2>
            ) :
                (
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
                        <BannerMen>
                            <h2>Estilo e conforto para o homem moderno</h2>
                        </BannerMen>
                        <Products>
                            {products.map((product) => (
                                <Link key={product._id} to={`/products/${product.slug}`}>
                                    <ProductCard product={product} />
                                </Link>
                            ))}
                        </Products>
                        <PaginationArea>
                            {[...Array(pageCount)].map((_, i) => (
                                <PaginationButton key={i} active={i + 1 === page} onClick={() => setPage(i + 1)}>
                                    {i + 1}
                                </PaginationButton>
                            ))}
                        </PaginationArea>
                    </motion.div>
                )}
            <Footer />
        </div>
    );
};

export default StorePage;