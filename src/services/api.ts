import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const getAuctions = (query = '') => api.get(`/auctions${query}`);
export const getAuctionById = (id: string) => api.get(`/auctions/${id}`);
export const placeBid = (data: any) => api.post('/bids', data);
export const login = (data: any) => api.post('/users/login', data);
export const register = (data: any) => api.post('/users', data);

export default api;
