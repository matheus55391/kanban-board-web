import { HomePageView } from "@/components/home/home-page-view";
import { GuestGuard } from "@/components/guards/guest-guard";
import React from "react";

const StartPage: React.FC = () => {
  return (
    <GuestGuard>
      <HomePageView />
    </GuestGuard>
  );
};

export default StartPage;
