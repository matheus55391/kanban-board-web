'use client';
import React from "react";
import LoginView from "@/components/auth/login-view";
import { GuestGuard } from "@/components/guards/guest-guard";

export default function LoginPage(): React.JSX.Element {
  return <GuestGuard><LoginView /></GuestGuard>; 
};

