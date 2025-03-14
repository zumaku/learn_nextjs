export default async function ProductPage() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return (
        <div>Product</div>
    );
}