"use client";

import KanbanBoard from "@/components/pages/dashboard/kanban-board";
import useSession from "@/hooks/use-session";
import Image from "next/image";
import React from "react";
import { BiExit, BiSearch } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import DashboardSideBar from "./old/dashboard-sidebar";
import { ThemeToggleButton } from "../core/theme-toggle-button";

export default function DashboardView() {
  return <KanbanBoard />;
}

interface SidebarLinkProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: SidebarLinkProps) {
  const { user, handleSignOut } = useSession();
  return (
    <div className="flex flex-row max-h-screen min-h-screen overflow-hidden ">
      <DashboardSideBar />
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between min-h-20 max-h-20 p-4 px-8 border-b-[1px]">
          <div className="flex items-center p-2 border border-gray-300 rounded-md shadow-sm  bg-white min-w-96">
            <BiSearch size={20} color="gray" />
            <input
              type="text"
              className="w-full ml-2 p-1.5 placeholder-gray-500 rounded-md border border-transparent focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out"
              placeholder="Search projects"
            />
          </div>

          <div className="flex flex-row items-center space-x-4  ">
            <ThemeToggleButton />

            <div className="flex flex-col items-end pl-2 ">
              <p className="text-sm font-semibold">{user?.name}</p>
              <div
                className="flex flex-row items-center space-x-1 hover:cursor-pointer"
                onClick={handleSignOut}
              >
                <span className="text-xs text-gray-700 ">Exit</span>
                <BiExit size={14} color="gray" />
              </div>
            </div>
            <div className="rounded-full overflow-hidden w-10 h-10 flex items-center justify-center bg-slate-700 text-white">
              {user?.avatar ? (
                <Image src={user?.avatar} alt="avatar" width={40} height={40} />
              ) : (
                <FaRegUser size={24} />
              )}
            </div>
            <SlArrowDown size={16} />
          </div>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
