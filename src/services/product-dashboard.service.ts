import api from "../api";
import type { TProductDashboard } from "../@types/product";

type TResponse = {
  status_code: number;
  message?: string;
  data?: TProductDashboard;
  error?: string;
};

export default async function productsDashboardService() {
  const response = await api.get<TResponse>("/api/products/dashboard");
  return response.data;
}
