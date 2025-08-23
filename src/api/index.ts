import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.API_BASE_URL ?? "http://localhost:8080",
});

export default api;
