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
import type { TProduct } from "../../@types/product";
import Header from "../../components/header";

export default function Home() {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await findAllProductsService();
      setProducts(data ?? []);
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto p-4 flex flex-col gap-4">
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
                <TableRow key={`product-${product.id}`}>
                  <TableHeader>{product.name}</TableHeader>
                  <TableData>{formatCurrency(product.price)}</TableData>
                  <TableData>{product.quantity}</TableData>
                  <TableData>{product.status}</TableData>
                  <TableData>{formatDate(product.created_at)}</TableData>
                  <TableData>{formatDateTime(product.updated_at)}</TableData>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </main>
    </>
  );
}
