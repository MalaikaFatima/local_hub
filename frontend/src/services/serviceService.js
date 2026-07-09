import api from "./api";

// ======================
// GET ALL SERVICES
// ======================

export const getServices = async (token) => {

    const response = await api.get("/services", {

        headers: {

            Authorization: `Bearer ${token}`,

        },

    });

    return response.data;

};

// ======================
// CREATE SERVICE
// ======================

export const createService = async (token, data) => {

    const response = await api.post(

        "/services",

        data,

        {

            headers: {

                Authorization: `Bearer ${token}`,

                "Content-Type": "multipart/form-data",

            },

        }

    );

    return response.data;

};

// ======================
// UPDATE SERVICE
// ======================

export const updateService = async (token, id, data) => {

    data.append("_method", "PUT");

    const response = await api.post(

        `/services/${id}`,

        data,

        {

            headers: {

                Authorization: `Bearer ${token}`,

                "Content-Type": "multipart/form-data",

            },

        }

    );

    return response.data;

};

// ======================
// DELETE SERVICE
// ======================

export const deleteService = async (token, id) => {

    const response = await api.delete(

        `/services/${id}`,

        {

            headers: {

                Authorization: `Bearer ${token}`,

            },

        }

    );

    return response.data;

};// ======================
// GET SERVICE DETAILS
// ======================

export const getServiceById = async (token, id) => {

    const response = await api.get(

        `/services/${id}`,

        {
            headers:{
                Authorization:`Bearer ${token}`,
            },
        }

    );

    return response.data;

};