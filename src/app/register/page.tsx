import { RegisterView } from "@/components/home/register-view";
import { GuestGuard } from "@/guards/guest-guard";
import React from "react";

const RegisterPage: React.FC = () => {
  return (
    <GuestGuard>
      <RegisterView />
    </GuestGuard>
  );
};

export default RegisterPage;
