export type TProduct = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  estoqueBaixo: boolean;
  dataEntrada: string;
  ultimaSaida: string | null;
};
