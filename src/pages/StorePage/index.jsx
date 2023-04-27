import React, { useReducer } from 'react';
import DescountBar from '../../components/DescountBar';
import Header from '../../components/Header';
import { Products } from './styles';
import Footer from '../../components/Footer';
import ClosetChicApi from '../../service/closetChic.api';
import ProductCard from './ProductCard';

const TYPES = {
    FETCH_REQUEST: 'FETCH_REQUEST',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_ERROR: 'FETCH_ERROR'
};

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
            <Products>
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </Products>
            <Footer />
        </div>
    );
};

export default StorePage;