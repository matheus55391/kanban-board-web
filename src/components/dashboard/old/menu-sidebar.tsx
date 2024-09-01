"use client";

import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdOutlineTask } from "react-icons/md";

export default function MenuSideBar() {
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
