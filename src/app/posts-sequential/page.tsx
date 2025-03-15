import { Suspense } from "react";
import Author from "./author";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostsSequential() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  const filteredPost = posts.filter((post) => post.id % 10 === 0);
  // JSONPlaceholder memiliki pola data di mana setiap 10 postingan memiliki penulis yang berbeda. Dengan menyaring hanya postingan dengan ID kelipatan 10, kita memastikan setiap postingan berasal dari penulis yang unik, sehingga hasilnya lebih bervariasi daripada hanya mengambil semua postingan.

  return (
    <div>
      {filteredPost.map((post) => (
        <div key={post.id} className="border p-4 my-2">
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p>{post.body}</p>
          <Suspense
            fallback={<span className="text-gray-400">Loading author...</span>}
          >
            <p className="text-gray-500">
              Author: <Author userId={post.userId} />
            </p>
          </Suspense>
        </div>
      ))}
    </div>
  );
}
