import api from "../api";

type TRequest = { id: number };

type TResponse = null;

export default async function destroyProductService({ id }: TRequest) {
  const response = await api.delete<TResponse>(`/api/products/${id}`);
  return response.data;
}
