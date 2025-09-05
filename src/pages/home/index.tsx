import { useEffect, useState } from "react";
import Subheading from "../../components/subheading";
import {
  formatCurrency,
  formatDate,
  formatDateTime,
  getProductStatusLabel,
} from "../../helpers";
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

  const renderProductStatus = (status: string) => {
    return (
      <span className="text-neutral-900 text-xs font-semibold uppercase bg-neutral-200 px-2 py-1 rounded-full">
        {getProductStatusLabel(status)}
      </span>
    );
  };

  return (
    <main className="text-neutral-900 h-screen bg-white pt-36 px-8">
      <Header />
      <section className="max-w-7xl mx-auto flex flex-col gap-4">
        <div>
          <Subheading>Produtos</Subheading>
          <p>Gerencie seu inventário de produtos.</p>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Nome</TableHeader>
              <TableHeader>Preço</TableHeader>
              <TableHeader>Quantidade</TableHeader>
              <TableHeader>Situação</TableHeader>
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
                <TableData>{renderProductStatus(product.status)}</TableData>
                <TableData>{formatDate(product.created_at)}</TableData>
                <TableData>{formatDateTime(product.updated_at)}</TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
