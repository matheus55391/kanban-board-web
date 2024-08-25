"use client";

import LogoutButton from "@/components/auth/logout-button";
import KanbanBoard from "@/components/pages/dashboard/KanbanBoard";
import useSession from "@/hooks/use-session";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillKanbanFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoLogoGithub, IoCube, IoPeople, IoLogoBuffer } from "react-icons/io5";
import { MdOutlineTask } from "react-icons/md";
import { PiSquaresFourLight } from "react-icons/pi";
import { RiGroupLine } from "react-icons/ri";
import { TiStarHalfOutline } from "react-icons/ti";

export default function DashboardView() {
  const { user } = useSession();

  return (
    <DashboardLayout>
      <div className="flex flex-col w-full overflow-scroll">
        <div className="flex flex-row items-center pl-4">
          <IoLogoBuffer className="text-black" size={24} />
          <h1 className="text-2xl font-bold text-center p-3">Project Board</h1>
        </div>
        <div className="flex h-full w-full ">
          <KanbanBoard />
        </div>
      </div>
    </DashboardLayout>
  );
}

interface SidebarLinkProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: SidebarLinkProps) {
  return (
    <div className="flex h-screen w-screen ">
      <DashboardSideBar />
      {children}
    </div>
  );
}

function DashboardSideBar() {
  const { user } = useSession();

  const session = {
    user: {
      name: user?.name || "unknown",
      image: user?.avatar,
    },
  };
  return (
    <div className="flex flex-col w-80  border-r-[1px]   ">
      <div className="flex flex-row border-b-[1px] p-4  items-center space-x-2">
        <TiStarHalfOutline size={24} color="black" />
        <h1 className="font-bold line-clamp-1">Project Kanban Board</h1>
      </div>
      <div className="p-2 flex flex-col space-y-2">
        <MenuSideBar />
        <div className="h-[1px] bg-gray-300 " />
        <ProjectsListSideBar />
      </div>
    </div>
  );
}

function MenuSideBar() {
  return (
    <div className="flex flex-col space-y-6 p-4   ">
      <MenuButton
        icon={<AiOutlineHome size={24} color="gray" />}
        label="Home"
      />
      <MenuButton
        icon={<MdOutlineTask size={24} color="gray" />}
        label="Tasks"
      />
      <MenuButton icon={<FaRegUser size={24} color="gray" />} label="Members" />
      <MenuButton
        icon={<FiSettings size={24} color="gray" />}
        label="Settings"
      />
    </div>
  );
}

interface MenuButtonProps {
  icon?: React.ReactNode;
  label: string;
}
function MenuButton({ icon, label }: MenuButtonProps) {
  return (
    <div className="flex flex-row items-center space-x-2 hover:cursor-pointer ">
      {icon}
      <h3 className="text-gray-500 font-normal text-sm">{label}</h3>
    </div>
  );
}

function ProjectsListSideBar() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row justify-between items-center p-4 ">
        <h3 className="font-semibold text-sm text-gray-600">MY PROJECTS</h3>
        <IoIosAddCircleOutline size={18} color="#4b5563 " />
      </div>
      <div className="flex flex-col space-y-2">
        <ProjectCardButtonSideBar
          title="Mobile App"
          color="bg-red-600"
          isActive={true}
        />
        <ProjectCardButtonSideBar title="Website Redesign" color="bg-purple-600" />
        <ProjectCardButtonSideBar title="Design System" color="bg-blue-600" />
      </div>
    </div>
  );
}

interface ProjectCardButtonSideBarProps {
  title: string;
  color?: string;
  isActive?: boolean;
}
function ProjectCardButtonSideBar({
  title,
  color = "bg-red-600",
  isActive = false,
}: ProjectCardButtonSideBarProps) {
  return (
    <div
      className={`flex flex-row items-center  hover:cursor-pointer hover:bg-gray-200 p-2 px-3 w-full rounded-lg ${
        isActive && "bg-gray-200"
      } `}
    >
      <div className="flex flex-row items-center space-x-2 w-full rounded-lg mr-1 ">
        <div
          className={`rounded-full max-w-2 max-h-2 min-w-2 min-h-2  ${color}`}
        />
        <h3 className="text-gray-500 font-normal text-sm line-clamp-1">
          {title}
        </h3>
      </div>
      <div className="flex flex-row items-center ">
        <GoKebabHorizontal size={14} color="black " />
      </div>
    </div>
  );
}
