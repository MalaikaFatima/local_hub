import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/reviews";


// Get all reviews
export const getReviews = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};


// Create review
export const createReview = async (reviewData) => {

    const token = localStorage.getItem("token");

    const response = await axios.post(
        API_URL,
        reviewData,
        {
            headers:{
                Authorization:`Bearer ${token}`,
            }
        }
    );

    return response.data;
};


// Update review
export const updateReview = async (id, reviewData) => {

    const token = localStorage.getItem("token");

    const response = await axios.put(
        `${API_URL}/${id}`,
        reviewData,
        {
            headers:{
                Authorization:`Bearer ${token}`,
            }
        }
    );

    return response.data;
};


// Delete review
export const deleteReview = async (id) => {

    const token = localStorage.getItem("token");

    const response = await axios.delete(
        `${API_URL}/${id}`,
        {
            headers:{
                Authorization:`Bearer ${token}`,
            }
        }
    );

    return response.data;
};