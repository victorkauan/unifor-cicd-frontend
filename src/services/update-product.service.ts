import api from "../api";
import type { TProduct } from "../@types/product";

type TRequest = {
  id: number;
  name?: string;
  price?: number;
  quantity?: number;
};

type TResponse = {
  status_code: number;
  message?: string;
  data?: TProduct;
  error?: string;
};

export default async function updateProductService({ id, ...data }: TRequest) {
  const response = await api.patch<TResponse>(`/api/products/${id}`, data);
  return response.data;
}
