// src/api/interceptors.js

import { getToken } from "../helper/auth-helper"; // Agar sizning loyihangizda `src` papkasi bo'lsa
import axios from "axios";

// Axios instance yaratamiz
const http = axios.create({
    baseURL: 'https://store.go-clothes.uz/v1'
});

// Request interceptor qo'shamiz
http.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default http;
