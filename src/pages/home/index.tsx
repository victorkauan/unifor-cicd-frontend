import { useEffect, useState } from "react";
import Subheading from "../../components/subheading";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/table";
import type { TProduct } from "../../@types/product";
import findAllProductsService from "../../services/find-all-products.service";
import { formatCurrency, formatDate, formatDateTime } from "../../helpers";

export default function Home() {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await findAllProductsService();
      setProducts(response);
    }

    fetchProducts();
  }, []);

  return (
    <main className="max-w-7xl mx-auto p-4">
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
