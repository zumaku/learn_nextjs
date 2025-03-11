export type UserV2 = {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: string; // ISO timestamp format
  fullName: string;
  age: number;
  gender: "Male" | "Female" | "Other"; // Enum-like type
  address: string;
  phone: string;
  role: "admin" | "user" | "moderator"; // Enum-like type
  isActive: boolean;
  lastLogin: string; // ISO timestamp format
};

export async function GET() {
  const userData = [
    {
      id: 1,
      username: "john_doe",
      email: "john.doe@example.com",
      password: "securepassword123",
      createdAt: "2024-03-11T10:00:00Z",
      fullName: "John Doe",
      age: 28,
      gender: "Male",
      address: "123 Main St, New York, NY",
      phone: "+1-234-567-8901",
      role: "admin",
      isActive: true,
      lastLogin: "2024-03-11T12:30:00Z",
    },
    {
      id: 2,
      username: "jane_smith",
      email: "jane.smith@example.com",
      password: "mypassword456",
      createdAt: "2024-03-10T14:30:00Z",
      fullName: "Jane Smith",
      age: 25,
      gender: "Female",
      address: "456 Elm St, Los Angeles, CA",
      phone: "+1-987-654-3210",
      role: "user",
      isActive: true,
      lastLogin: "2024-03-11T09:45:00Z",
    },
    {
      id: 3,
      username: "alex_rogers",
      email: "alex.rogers@example.com",
      password: "passAlex789",
      createdAt: "2024-03-09T08:15:00Z",
      fullName: "Alex Rogers",
      age: 32,
      gender: "Male",
      address: "789 Pine St, Chicago, IL",
      phone: "+1-345-678-9012",
      role: "moderator",
      isActive: false,
      lastLogin: "2024-03-10T16:00:00Z",
    },
    {
      id: 4,
      username: "sarah_johnson",
      email: "sarah.johnson@example.com",
      password: "sarahPass123",
      createdAt: "2024-03-08T12:45:00Z",
      fullName: "Sarah Johnson",
      age: 29,
      gender: "Female",
      address: "101 Maple Ave, San Francisco, CA",
      phone: "+1-456-789-0123",
      role: "user",
      isActive: true,
      lastLogin: "2024-03-11T07:30:00Z",
    },
    {
      id: 5,
      username: "michael_brown",
      email: "michael.brown@example.com",
      password: "michael789pass",
      createdAt: "2024-03-07T18:20:00Z",
      fullName: "Michael Brown",
      age: 35,
      gender: "Male",
      address: "202 Oak Rd, Seattle, WA",
      phone: "+1-567-890-1234",
      role: "admin",
      isActive: true,
      lastLogin: "2024-03-11T11:15:00Z",
    },
  ];
  return Response.json(userData);
}
