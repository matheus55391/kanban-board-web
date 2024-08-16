import { GuestGuard } from "@/components/guards/guest-guard";
import WelcomeView from "@/components/home/welcome-view";
import React from "react";

const StartPage: React.FC = () => {
  return (
    <GuestGuard>
      <WelcomeView />
    </GuestGuard>
  );
};

export default StartPage;
