import { comments } from "../../data"

export async function GET(request: Request, {params}: {params: Promise<{id: string}>}) {
    const { id } = await params
    const comment = comments.find((comment) => comment.id === Number(id))

    if (!comment) {
        return new Response(JSON.stringify({ error: "Comment not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }

    return Response.json(comment)
}