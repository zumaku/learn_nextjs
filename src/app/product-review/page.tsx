import ProductPage from "@/components/product";
import ReviewPage from "@/components/review";
import { Suspense } from "react";

export default function ProductReviewPage() {
    return (
        <div>
            <h1>Product Review</h1>
            <Suspense fallback={"<p>Loading Product</p>"} >
                <ProductPage />
            </Suspense>
            <Suspense fallback={"<p>Loading Review</p>"} >
                <ReviewPage />
            </Suspense>
        </div>
    );
}