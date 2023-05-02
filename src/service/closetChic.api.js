/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "https://closetchic-api.onrender.com/",
    headers: { "Content-Type": "application/json" },
});

const getProducts = async (query = "") => {
    try {
        const response = await axiosInstance.get(`/products${query}`);
        return response.data;
    } catch (error) {
        return error.data;
    }
};


const getOneProduct = async (product) => {
    try {
        const response = await axiosInstance.get(`/products/${product}`);
        return response.data;
    } catch (error) {
        return error.data;
    }
};

const getFeaturedProducts = async () => {
    try {
        const response = await axiosInstance.get(`/products/featured-products`);
        return response.data;
    } catch (error) {
        return error.data;
    }
};

const getCartProducts = async (token) => {
    try {
        const response = await axiosInstance.get(`/cart`, createHeader(token));
        return response.data.userCart;
    } catch (error) {
        return error.data;
    }
};

const getProductsCount = async () => {
    try {
        const response = await axiosInstance.get(`/products/count`);
        return response.data;
    } catch (error) {
        return error.data;
    }
};

const postCartProducts = async (products, token) => {
    try {
        await axiosInstance.post(`/cart`, { products }, createHeader(token));
    } catch (error) {
        return error.data;
    }
};

const authenticateUser = async (body) => {
    try {
        const response = await axiosInstance.post(`/sign-in`, body);
        return response.data;
    } catch (error) {
        return error.data;
    }
};

const registerUser = async (body) => {
    try {
        const response = await axiosInstance.post(`/sign-up`, body);
        return response.data;
    } catch (error) {
        return error.data;
    }
};

const sendOrder = async (body, token) => {
    try {
        const response = await axiosInstance.post(`/orders`, body, createHeader(token));
        return response.data;
    } catch (error) {
        return error.data;
    }
};

const createHeader = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};

export default {
    getProducts,
    getOneProduct,
    getFeaturedProducts,
    getProductsCount,
    getCartProducts,
    postCartProducts,
    authenticateUser,
    registerUser,
    sendOrder
};