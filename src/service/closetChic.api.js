/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/",
    headers: { "Content-Type": "application/json" },
});

const getProducts = async () => {
    try {
        const response = await axiosInstance.get('/products');
        return response.data;
    } catch (error) {
        return error.data;
    }
};

export default {
    getProducts
};