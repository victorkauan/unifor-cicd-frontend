import api from "../api";
import type { TMovement } from "../@types/movement";

type TResponse = TMovement[];

export default async function findAllMovementsService() {
  const response = await api.get<TResponse>("/api/movimentacoes");
  return response.data;
}
