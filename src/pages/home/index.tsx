import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
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
import Button from "../../components/button";

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
      <span className="text-white text-xs font-semibold whitespace-nowrap uppercase bg-neutral-600 px-2 py-1 rounded-full">
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
              <TableHeader>Ações</TableHeader>
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
                <TableData>
                  <div className="flex gap-2">
                    <Button>
                      <Pencil size={16} />
                      <span>Editar</span>
                    </Button>
                    <Button className="bg-red-500 hover:bg-red-400">
                      <Trash2 size={16} />
                      <span>Excluir</span>
                    </Button>
                  </div>
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
