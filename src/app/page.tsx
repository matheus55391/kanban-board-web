import { GuestGuard } from "@/components/guards/guest-guard";
import StartPageLayout from "@/components/pages/start/StartPageLayout";
import React from "react";

const StartPage: React.FC = () => {

  return <GuestGuard><StartPageLayout /></GuestGuard>
};

export default StartPage;
