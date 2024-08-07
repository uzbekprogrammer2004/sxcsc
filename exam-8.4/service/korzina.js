// service/product.ts
import http from "@/api/interseptors";
import axios, { AxiosResponse } from "axios";

const token = localStorage.getItem("access_token");

export const getProduct = async () => {
  try {
    const response = await http.get(
      "/user-baskets",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
    }
    return [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Fetch product by ID
export const basketSave = async (data) => {
  try {
    const response = await http.post("/basket", data);
    return response;
  } catch (error) {
    throw error;
  }
};
