import { getProducts } from "@/prisma-db";
import ProductDetail from "./product-detail";

export type Products = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsPage({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const {query} = await searchParams
  const products: Products[] = await getProducts(query);

  return <ProductDetail products={products} />
}
