import axios from "axios"

const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`
});

export const getClients = () => api.get(`/clients/`).then(res => res.data.data);

export const getClient = (id) => api.get(`/clients/${id}`).then(res => res.data.data);

export const updateClient = ({id, ...data}) => api.put(`/clients/${id}`, data).then(res => res.data);
