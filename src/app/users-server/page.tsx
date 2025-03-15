import { FC } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/usersasdasdas");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

const UsersServer: FC = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const users = await fetchUsers();

  return (
    <ul className="flex flex-wrap justify-start gap-2">
      {users.map((user) => (
        <li key={user.id} className="p-2 border rounded-xl" >
          <h3>{user.name} ({user.username})</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </li>
      ))}
    </ul>
  );
};

export default UsersServer;