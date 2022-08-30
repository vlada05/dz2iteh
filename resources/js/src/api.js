const axios = window.axios;
const BASE_API_URL = 'http://localhost:8000/api';

export default {
    getAllProducts: () =>
        axios.get(`${BASE_API_URL}/products`),
    getOneProduct: (id) =>
        axios.get(`${BASE_API_URL}/products/${id}`),
    addProduct: (product) =>
        axios.post(`${BASE_API_URL}/products`, product),
    updateProduct: (product, id) =>
        axios.patch(`${BASE_API_URL}/products/${id}`, product),
    deleteProduct: (id) =>
        axios.delete(`${BASE_API_URL}/products/${id}`),

    getAllManufacturers: () =>
        axios.get(`${BASE_API_URL}/manufacturers`),
    getAllManufecturerProducts: (id) =>
        axios.get(`${BASE_API_URL}/manufacturers/${id}`)
}