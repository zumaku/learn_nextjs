"use client"

import { useSearchParams } from "next/navigation";

export default function ArtikelDetail() {
  const search = useSearchParams().get("nyari")
  return (
    <div>Nyari ini: {search}</div>
  );
}