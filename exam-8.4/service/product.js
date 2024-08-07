

import http from "@/api/interseptors";
import axios, { AxiosResponse } from 'axios';


export const getProduct = async (page, limit) => {
  try {
    const response = await http.get("/products", {
      params: { page, limit },
    });
    if (response.status === 200 && response.data?.products) {
      return response.data.products;
    }
    return [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Mahsulotni ID bo'yicha olish funksiyasi
export const getProductsId = async (id) => {
  try {
    const response = await http.get(`/products/${id}`);
    if (response.status === 200 && response.data?.product) {
      return response.data.product;
    }
    return null;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return null;
  }
};

// Mahsulotni product_id bo'yicha olish funksiyasi
export const getProductId = async (product_id) => {
  try {
    const response = await http.get(`/product/${product_id}`);
    return response.data.product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};
