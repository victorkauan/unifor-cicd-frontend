import api from "../api";
import type { TProduct } from "../@types/product";

type TResponse = TProduct[];

export default async function findAllProductsService() {
  const response = await api.get<TResponse>("/api/produtos");
  return response.data;
}
