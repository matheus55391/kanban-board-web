"use client";

import { TiStarHalfOutline } from "react-icons/ti";
import MenuSideBar from "./menu-sidebar";
import ProjectsListSideBar from "./projects-list-sidebar";

export default function DashboardSideBar() {
    // const { user } = useSession();
  
    // const session = {
    //   user: {
    //     name: user?.name || "unknown",
    //     image: user?.avatar,
    //   },
    // };
    return (
      <div className="flex flex-col w-80  border-r-[1px]   ">
        <div className="flex flex-row border-b-[1px]  min-h-20 max-h-20 items-center space-x-2 justify-start px-4">
          <TiStarHalfOutline size={32} color="red" />
          <h1 className="font-bold text-lg line-clamp-1">MegaBoard</h1>
        </div>
        <div className="p-2 flex flex-col space-y-2">
          <MenuSideBar />
          <div className="h-[1px] bg-gray-300 my-2 " />
          <ProjectsListSideBar />
        </div>
      </div>
    );
  }
  