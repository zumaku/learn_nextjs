import Counter from "./counter"

export const metadata = {
    title: "This is Metadata in Client Component",
    description: "Metadata in client component should be static metadata. We can't use dynamic metadata in Client Side Rendering(CSR), only in Server Side Rendering (SSR)."
}

export default function CounterPage() {
    return <Counter />
};
