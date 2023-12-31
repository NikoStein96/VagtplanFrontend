import axios from "axios";
import { auth } from "../firebase";

// Axios instance with a base URL
const instance = axios.create({
  baseURL: "https://planitbackend.azurewebsites.net/api",
});

// Add an Axios request interceptor to include the Firebase token in the headers
instance.interceptors.request.use(async (config) => {
  try {
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken();

      config.headers["Authorization"] = `Bearer ${token}`;
    }
  } catch (error) {
    // Handle token retrieval error (e.g., token expired, user not authenticated)
    console.error("Error getting Firebase token:", error);
  }

  return config;
});

export default instance;
