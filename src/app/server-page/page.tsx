import { ServerFuncionExample } from "@/utils/serverFunctionExample";

export default function ServerPage() {
    const result = ServerFuncionExample()
    
    return (
        <h1>Ini Server Page | {result}</h1>
    );
}