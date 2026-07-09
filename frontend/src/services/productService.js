import api from "./api";

export const getProducts = async (token) => {
    const response = await api.get("/products", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const createProduct = async (token, data) => {
    const response = await api.post("/products", data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const updateProduct = async (token, id, data) => {
    const response = await api.put(`/products/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const deleteProduct = async (token, id) => {
    const response = await api.delete(`/products/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};