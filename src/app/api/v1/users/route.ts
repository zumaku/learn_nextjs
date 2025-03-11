import { redirect } from "next/navigation";

export type UserV1 = {
    id: number;
    username: string;
    email: string;
    password: string;
    createdAt: string; // ISO timestamp format
};

export async function GET() {
    redirect("/api/v2/users");
    const userData: UserV1[] = [
        {
            id: 1,
            username: "john_doe",
            email: "john.doe@example.com",
            password: "securepassword123",
            createdAt: "2024-03-11T10:00:00Z",
        },
        {
            id: 2,
            username: "jane_smith",
            email: "jane.smith@example.com",
            password: "mypassword456",
            createdAt: "2024-03-10T14:30:00Z",
        },
        {
            id: 3,
            username: "alex_rogers",
            email: "alex.rogers@example.com",
            password: "passAlex789",
            createdAt: "2024-03-09T08:15:00Z",
        },
        {
            id: 4,
            username: "sarah_johnson",
            email: "sarah.johnson@example.com",
            password: "sarahPass123",
            createdAt: "2024-03-08T12:45:00Z",
        },
        {
            id: 5,
            username: "michael_brown",
            email: "michael.brown@example.com",
            password: "michael789pass",
            createdAt: "2024-03-07T18:20:00Z",
        },
    ];
    
    return Response.json(userData);
}
