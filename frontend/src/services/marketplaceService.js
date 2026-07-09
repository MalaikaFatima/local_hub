import api from "./api";

export const getMarketplaceServices = async () => {
    const response = await api.get("/services");
    return response.data;
};