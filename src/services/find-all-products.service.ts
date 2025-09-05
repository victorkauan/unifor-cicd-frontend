import api from "../api";
import type { TProduct } from "../@types/product";

type TResponse = {
  status_code: number,
  message?: string,
  data?: TProduct[]
  error?: string
};

export default async function findAllProductsService() {
  const response = await api.get<TResponse>("/api/products");
  return response.data;
}
