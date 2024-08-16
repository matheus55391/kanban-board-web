"use client";
import queryClient from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
