import { GuestGuard } from "@/components/guards/guest-guard";
import RegisterPageLayout from "@/components/pages/register/RegisterPageLayout";
import React from "react";

const RegisterPage: React.FC = () => {
  return (
    <GuestGuard>
      <RegisterPageLayout />
    </GuestGuard>
  );
};

export default RegisterPage;
