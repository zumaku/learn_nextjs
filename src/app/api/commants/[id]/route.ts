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

export async function PATCH(request: Request, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params
    const {text} = await request.json()

    const index = comments.findIndex((commant) => commant.id === parseInt(id))
    comments[index] = { ...comments[index], text: text };

    return Response.json(comments[index])
}

export async function DELETE(request: Request, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params
    const index = comments.findIndex((comment) => comment.id === parseInt(id))
    const deledComment = comments[index]
    comments.splice(index, 1)
    return Response.json(deledComment)
}