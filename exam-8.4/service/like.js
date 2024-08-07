// service/product.ts
import http from "@/api/interseptors";
import axios, { AxiosResponse } from "axios";

// Fetch products list
export const getLike = async (page, limit) => {
    try {
      const response = await http.get("/wishlist", {
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
export const likeSave = async (data) => {
    try {
      const response = await http.post(`/like/${data.productId}`);
      return response;
    } catch (error) {
      throw error;
    }
  };

// // service/product.ts
// import http from "@/api/interseptors";
// import axios, { AxiosResponse } from "axios";

// export interface Product {
//   like: boolean;
// }

// interface ProductsResponse {
//   products: Product[];
// }

// interface ProductResponse {
//   product: Product;
// }

// // Fetch products list

// export const getLike = async (page: number, limit: number): Promise<Product[]> => {
//     try {
//       const response: AxiosResponse<ProductsResponse> = await http.get("/wishlist", {
//         params: { page, limit },
//       });
//       if (response.status === 200 && response.data?.products) {
//         return response.data.products;
//       }
//       return [];
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       return [];
//     }
//   };

// // Fetch product by ID
// export const likeSave = async (data: { productId: string }) => {
//     try {
//       const response = await http.post(`/like/${data.productId}`);
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   };