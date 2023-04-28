/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/",
    headers: { "Content-Type": "application/json" },
});

const getProducts = async (query = "") => {
    try {
        const response = await axiosInstance.get(`/products/${query}`);
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
}

const getFeaturedProducts = async () => {
    try {
        const response = await axiosInstance.get(`/products/featured-products`);
        return response.data;
    } catch (error) {
        return error.data;
    }
}


export default {
    getProducts,
    getOneProduct,
    getFeaturedProducts
};