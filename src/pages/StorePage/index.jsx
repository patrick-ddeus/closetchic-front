import React, { useReducer } from 'react';
import DescountBar from '../../components/DescountBar';
import Header from '../../components/Header';
import { Products } from './styles';
import Footer from '../../components/Footer';
import ClosetChicApi from '../../service/closetChic.api';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SkeletonStore from './Skeleton';

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
            return { ...state, products: action.payload, loading: false };
        case TYPES.FETCH_ERROR:
            return { ...state, products: action.payload, loading: false };
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

    React.useEffect(() => {
        async function fetchProducts() {
            dispatch({ type: TYPES.FETCH_REQUEST });
            try {
                const response = await ClosetChicApi.getProducts();
                dispatch({ type: TYPES.FETCH_SUCCESS, payload: response.products });
            } catch (error) {
                dispatch({ type: TYPES.FETCH_ERROR, payload: error.message });
            }
        }

        fetchProducts();
    }, []);

    return (
        <div>
            <DescountBar />
            <Header />
            {loading ? (
                <SkeletonStore />
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
                        <Products>
                            {products.map((product) => (
                                <Link key={product._id} to={`/products/${product.slug}`}>
                                    <ProductCard product={product} />
                                </Link>
                            ))}
                        </Products>
                        <Footer />
                    </motion.div>
                )}

        </div>
    );
};

export default StorePage;