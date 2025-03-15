export default async function Author({ userId }: { userId: number }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await res.json();
  return <span>{user.name}</span>;
}
