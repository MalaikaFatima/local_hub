import api from "./api";

export async function getDashboard(token){

    const {data}=await api.get("/dashboard",{

        headers:{
            Authorization:`Bearer ${token}`,
        },

    });

    return data;
}