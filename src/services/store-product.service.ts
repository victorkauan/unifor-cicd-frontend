import api from "../api";
import type { TProduct } from "../@types/product";

type TRequest = {
  name: string;
  price: number;
  quantity: number;
};

type TResponse = {
  status_code: number;
  message?: string;
  data?: TProduct;
  error?: string;
};

export default async function storeProductService(data: TRequest) {
  const response = await api.post<TResponse>("/api/products", data);
  return response.data;
}
