"use client";

import KanbanBoard from "@/components/pages/dashboard/kanban-board";
import useSession from "@/hooks/use-session";
import Image from "next/image";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiExit, BiSearch } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoLogoBuffer } from "react-icons/io5";
import { MdOutlineTask } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { TiStarHalfOutline } from "react-icons/ti";

export default function DashboardView() {
  // const { user } = useSession();

  return (
    <DashboardLayout>
      <KanbanBoard />
    </DashboardLayout>
  );
}

interface SidebarLinkProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: SidebarLinkProps) {
  const { user, handleSignOut } = useSession();
  return (
    <div className="flex flex-row h-screen w-screen ">
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

function DashboardSideBar() {
  // const { user } = useSession();

  // const session = {
  //   user: {
  //     name: user?.name || "unknown",
  //     image: user?.avatar,
  //   },
  // };
  return (
    <div className="flex flex-col w-80  border-r-[1px]   ">
      <div className="flex flex-row border-b-[1px]  min-h-20 max-h-20 items-center space-x-2 justify-center">
        <TiStarHalfOutline size={32} color="red" />
        <h1 className="font-bold text-lg line-clamp-1">Project Kanban Board</h1>
      </div>
      <div className="p-2 flex flex-col space-y-2">
        <MenuSideBar />
        <div className="h-[1px] bg-gray-300 my-2 " />
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
      <div className="flex flex-row justify-between items-center p-4 px-2 ">
        <h3 className="font-semibold text-sm text-gray-600">MY PROJECTS</h3>
        <IoIosAddCircleOutline size={18} color="#4b5563 " />
      </div>
      <div className="flex flex-col space-y-2">
        <ProjectCardButtonSideBar
          title="Mobile App"
          color="bg-red-600"
          isActive={true}
        />
        <ProjectCardButtonSideBar
          title="Website Redesign"
          color="bg-purple-600"
        />
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
