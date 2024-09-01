"use client";

import { GoKebabHorizontal } from "react-icons/go";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function ProjectsListSideBar() {
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
