import SignUpLinkButton from "@/components/SignUpLinkButton";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="text-zinc-800 p-4 md:px-14 flex justify-between items-center">
      <h1 className="text-2xl font-bold">KanbanBoard</h1>
      <div className="flex flex-row space-x-2 items-center">
        <p className="text-xs font-medium text-zinc-800">Not a member?</p>
        <SignUpLinkButton />
      </div>
    </header>
  );
};

export default Header;
