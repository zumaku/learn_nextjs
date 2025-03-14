"use client";

import { createContext, useContext } from "react";

type Theme = { colors: { primary: string; secondary: string } };

const defaultTheme: Theme = { colors: { primary: "blue", secondary: "red" } };

const ThemeContext = createContext<Theme>(defaultTheme);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>;
}

// Custom hook untuk menggunakan tema
export function useTheme() {
  return useContext(ThemeContext);
}