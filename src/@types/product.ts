export type TProduct = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  status: string;
  created_at: string;
  updated_at: string;
};

export type TProductDashboard = {
  totalProducts: number;
  totalItems: number;
  totalValue: number;
  lowStock: number;
  outOfStock: number;
};
