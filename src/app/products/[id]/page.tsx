export const dynamicParams = false    // Disable dynamic params rendering

export async function generateStaticParams() {
    return [
      { id: "1" },
      { id: "2" },
      { id: "3" }
    ];
  }

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <h1>
      Product {id} Details - Rendered at {new Date().toLocaleString()}
    </h1>
  );
}
