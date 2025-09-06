import { useEffect, useState } from "react";
import {
  CircleAlert,
  Package,
  Trash2,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";
import {
  formatCurrency,
  formatDate,
  formatDateTime,
  getProductStatusLabel,
} from "../../helpers";
import Subheading from "../../components/subheading";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/table";
import Header from "../../components/header";
import Button from "../../components/button";
import DashboardCard from "../../components/dashboard-card";
import StoreProductModal from "../../components/store-product-modal";
import UpdateProductModal from "../../components/update-product-modal";
import findAllProductsService from "../../services/find-all-products.service";
import productsDashboardService from "../../services/product-dashboard.service";
import type { TProduct, TProductDashboard } from "../../@types/product";

const DEFAULT_PRODUCT_DASHBOARD = {
  totalProducts: 0,
  totalItems: 0,
  totalValue: 0,
  lowStock: 0,
  outOfStock: 0,
};

export default function Home() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [productDashboard, setProductDashboard] = useState<TProductDashboard>(
    DEFAULT_PRODUCT_DASHBOARD
  );

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await findAllProductsService();
      setProducts(data ?? []);
    }

    async function fetchProductDashboard() {
      const { data } = await productsDashboardService();
      setProductDashboard(data ?? DEFAULT_PRODUCT_DASHBOARD);
    }

    fetchProducts();
    fetchProductDashboard();
  }, []);

  const renderProductStatus = (status: string) => {
    return (
      <span className="text-white text-xs font-semibold whitespace-nowrap uppercase bg-neutral-600 px-2 py-1 rounded-full">
        {getProductStatusLabel(status)}
      </span>
    );
  };

  const DASHBOARD_CARDS = [
    {
      title: "Total de produtos",
      icon: Package,
      value: productDashboard.totalProducts,
    },
    {
      title: "Total de itens",
      icon: TrendingUp,
      value: productDashboard.totalItems,
    },
    {
      title: "Valor total",
      icon: TrendingUp,
      value: formatCurrency(productDashboard.totalValue),
    },
    {
      title: "Estoque baixo",
      icon: CircleAlert,
      value: productDashboard.lowStock,
    },
    {
      title: "Fora de estoque",
      icon: TriangleAlert,
      value: productDashboard.outOfStock,
    },
  ];

  return (
    <main className="text-neutral-900 h-screen bg-white pt-28 px-8">
      <Header />
      <section className="max-w-7xl mx-auto flex flex-col gap-8 py-8">
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {DASHBOARD_CARDS.map((dashboardCard) => (
            <li key={dashboardCard.title}>
              <DashboardCard {...dashboardCard} />
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <Subheading>Produtos</Subheading>
              <p>Gerencie seu inventário de produtos.</p>
            </div>
            <StoreProductModal />
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
              {products.length ? (
                products.map((product) => (
                  <TableRow key={`product-${product.id}`}>
                    <TableHeader>{product.name}</TableHeader>
                    <TableData>{formatCurrency(product.price)}</TableData>
                    <TableData>{product.quantity}</TableData>
                    <TableData>{renderProductStatus(product.status)}</TableData>
                    <TableData>{formatDate(product.created_at)}</TableData>
                    <TableData>{formatDateTime(product.updated_at)}</TableData>
                    <TableData>
                      <div className="flex gap-2">
                        <UpdateProductModal product={product} />
                        <Button className="bg-red-500 hover:bg-red-400">
                          <Trash2 size={16} />
                          <span>Excluir</span>
                        </Button>
                      </div>
                    </TableData>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableData className="text-center" colSpan={7}>
                    Nenhum registro encontrado.
                  </TableData>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
}
