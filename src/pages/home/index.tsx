import { useEffect, useState } from "react";
import Subheading from "../../components/subheading";
import { formatCurrency, formatDate, formatDateTime } from "../../helpers";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/table";
import findAllProductsService from "../../services/find-all-products.service";
import findAllMovementsService from "../../services/find-all-movements.service";
import type { TProduct } from "../../@types/product";
import type { TMovement } from "../../@types/movement";

export default function Home() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [movements, setMovements] = useState<TMovement[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await findAllProductsService();
      setProducts(response);
    }

    async function fetchMovements() {
      const response = await findAllMovementsService();
      setMovements(response);
    }

    fetchProducts();
    fetchMovements();
  }, []);

  return (
    <main className="max-w-7xl mx-auto p-4 flex flex-col gap-4">
      <section className="flex flex-col gap-2">
        <Subheading>Histórico de movimentações</Subheading>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Produto</TableHeader>
              <TableHeader>Tipo</TableHeader>
              <TableHeader>Valor unitário</TableHeader>
              <TableHeader>Quantidade</TableHeader>
              <TableHeader>Data</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {movements.map((movement) => (
              <TableRow>
                <TableHeader>{movement.nomeProduto}</TableHeader>
                <TableData>{movement.tipo}</TableData>
                <TableData>{formatCurrency(movement.valorUnitario)}</TableData>
                <TableData>{movement.quantidade}</TableData>
                <TableData>{formatDateTime(movement.dataHora)}</TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <section className="flex flex-col gap-2">
        <Subheading>Produtos</Subheading>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Nome</TableHeader>
              <TableHeader>Preço</TableHeader>
              <TableHeader>Quantidade</TableHeader>
              <TableHeader>Estoque baixo</TableHeader>
              <TableHeader>Data de entrada</TableHeader>
              <TableHeader>Última saída</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow>
                <TableHeader>{product.nome}</TableHeader>
                <TableData>{formatCurrency(product.preco)}</TableData>
                <TableData>{product.quantidade}</TableData>
                <TableData>{product.estoqueBaixo ? "SIM" : "NÃO"}</TableData>
                <TableData>{formatDate(product.dataEntrada)}</TableData>
                <TableData>
                  {product.ultimaSaida
                    ? formatDateTime(product.ultimaSaida)
                    : "-"}
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
