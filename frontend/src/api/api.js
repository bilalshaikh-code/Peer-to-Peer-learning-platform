// api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// REQUEST INTERCEPTOR
API.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("access") ||
    sessionStorage.getItem("access");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// RESPONSE INTERCEPTOR (AUTO REFRESH)
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const refreshToken =
        localStorage.getItem("refresh") ||
        sessionStorage.getItem("refresh");

      if (!refreshToken) {
        window.location.href = "/login";
        return Promise.reject(error);
      }

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/token/refresh/",
          { refresh: refreshToken }
        );

        const newAccess = response.data.access;

        // Save new access token
        localStorage.setItem("access", newAccess);

        // Retry original request
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;
        return API(originalRequest);

      } catch (err) {
        // Refresh token expired
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default API;