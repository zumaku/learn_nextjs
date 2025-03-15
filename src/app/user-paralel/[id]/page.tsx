type Post = { userId: number; id: number; title: string; body: string };
type Album = { userId: number; id: number; title: string };

async function getUserPosts(userId: string): Promise<Post[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return res.json();
}

async function getUserAlbums(userId: string): Promise<Album[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    return res.json();
}

export default async function UserProfile({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const [posts, albums] = await Promise.all([
        getUserPosts(id),
        getUserAlbums(id),
    ]);

    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <h2>Posts</h2>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
            <div>
                <h2>Albums</h2>
                {albums.map((album) => (
                    <div key={album.id}>
                        <h3>{album.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}