import http from "@/api/interseptors";
import { setAccessToken } from "@/helpers/auth-helpers";

export const login = async (values) => {
  try {
    const { status, data } = await http.post("/login", values);
    
    if (status === 200) {
      setAccessToken(data.access_token);
    }
    
    return { status, data };
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
