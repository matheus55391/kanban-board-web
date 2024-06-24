import KanbanBoard from "@/components/dashboard/KanbanBoard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSettings, IoLogoGithub, IoCube, IoPeople, IoLogoBuffer } from "react-icons/io5";

const Page: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="bg-[#261C4D] w-14 flex flex-col items-center justify-between p-2 ">
        <div className="h-10 w-10 flex items-center justify-center  rounded-full overflow-hidden border-2 ">
          <Image
            src="https://avatars.githubusercontent.com/u/35656197?s=400&u=9aa14daa4ab5efc5df2a013aaf518ff77e963098&v=4"
            alt="Logo"
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col items-center space-y-6">
          <IoCube className="text-white" size={24} />
          <IoPeople className="text-white" size={24} />
          <Link
            href="https://github.com/matheus55391/kanban_board"
            target="_blank"
            className="text-white"
          >
            <IoLogoGithub className="text-white" size={24} />
          </Link>
        </div>
        <div className="py-2">
          <IoSettings className="text-white" size={24} />
        </div>
      </div>
      <div className="flex-1 max-h-screen overflow-scroll">
        <div className="flex flex-row items-center pl-4">
          <IoLogoBuffer className="text-black" size={24} />
          <h1 className="text-2xl font-bold text-center p-3">
            Project Board
          </h1>
        </div>
        <KanbanBoard />
      </div>
    </div>
  );
};

export default Page;
