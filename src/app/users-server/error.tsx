"use client";
import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => console.error("Error fetching users:", error), [error]);
  return <p className="text-red-500 text-center">Error fetching users data.</p>;
}