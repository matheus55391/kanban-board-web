"use client";
import React from "react";
import { GuestGuard } from "@/guards/guest-guard";
import { LoginView } from "@/components/home/login-view";

export default function LoginPage(): React.JSX.Element {
  return (
    <GuestGuard>
      <LoginView />
    </GuestGuard>
  );
}
