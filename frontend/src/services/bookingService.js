import api from "./api";

export const getBookings = async (token) => {

    const response = await api.get("/bookings", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const createBooking = async (token, data) => {

    const response = await api.post("/bookings", data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const updateBooking = async (token, id, data) => {

    const response = await api.put(

        `/bookings/${id}`,

        data,

        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

    );

    return response.data;
};

export const deleteBooking = async (token, id) => {

    const response = await api.delete(

        `/bookings/${id}`,

        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

    );

    return response.data;
};
