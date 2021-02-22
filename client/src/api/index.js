import https from 'https';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'https://localhost:3000/',
    hostname: process.env.REEACT_APP_API_HOST || 'https://localhost:3000/',
    httpsAgent: https.Agent({
        rejectUnauthorized: false,
    }),
});

export const getAllBooks = payload => api.get(`/books`, payload);
export const getBookById = id => api.get(`/book/${id}`);
export const insertBook = payload => api.post(`/book/create`, payload);
export const updateBookById = (id, payload) => api.post(`/book/${id}/update`, payload);
export const deleteBookById = id => api.delete(`/book/${id}/delete`);

const apis = {
    getAllBooks,
    getBookById,
    insertBook,
    updateBookById,
    deleteBookById,
};

export default apis;
