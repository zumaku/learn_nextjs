import { getProducts } from "@/prisma-db";
import ProductDetail from "./product-detail";

export type Products = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsPage() {
  const products: Products[] = await getProducts();

  return <ProductDetail products={products} />
}
