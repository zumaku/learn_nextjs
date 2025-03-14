"use client";

import { useTheme } from "@/components/ThemeProvider";
import { ClientFuncionExample } from "@/utils/clientFunctionExample";

export default function ClientRoutePage() {
  const theme = useTheme();
  const result = ClientFuncionExample()

  return (
    <>
      <h1 style={{ color: theme.colors.secondary }}>Client Route Page</h1>
      <p>{result}</p>
    </>
  )
}