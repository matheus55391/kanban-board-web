"use client";

import useSession from "@/hooks/use-session";
import { BoardManager, State } from "@/utils/BoardManager";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import Image from "next/image";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import { SlGrid, SlLayers } from "react-icons/sl";
import { TfiAngleDown } from "react-icons/tfi";
import ColumnComponent from "./column-component";

export default function KanbanBoard() {
  const [state, setState] = useState<State>(BoardManager.initialState);
  const { user } = useSession();
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const sourceId = source.droppableId as keyof State;
    const destinationId = destination.droppableId as keyof State;

    const newState = BoardManager.handleDragEnd(
      state,
      sourceId,
      destinationId,
      source.index,
      destination.index
    );

    setState(newState);
  };

  return (
    <div className="flex flex-col w-full overflow-scroll">
      <div className="flex flex-col w-full px-4 space-y-12 py-8">
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-row items-center space-x-4">
            <h1 className="text-4xl font-bold text-center">Project Board</h1>
            <div className="bg-gray-200 rounded-md h-5 w-5 flex items-center justify-center p-1 ">
              <MdOutlineModeEdit size={14} color="black" />
            </div>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <div className="flex flex-row items-center space-x-2">
              <div className="bg-gray-200 rounded-md h-5 w-5 flex items-center justify-center p-1 ">
                <IoIosAdd size={16} color="black" />
              </div>
              <span className="text-sm font-medium text-gray-500">Invite</span>
            </div>
            <div className="flex flex-row">
              <Image
                src={user?.avatar || "/avatar.png"}
                width={32}
                height={32}
                alt="user profile"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-row space-x-2 items-center justify-center border-2 p-2 border-gray-300 rounded-md max-w-28 px-3">
            <CiFilter size={18} color="gray" />
            <span className="text-sm font-normal text-gray-500">Filter</span>
            <TfiAngleDown size={18} color="gray" />
          </div>
          <div className="flex flex-row h-full space-x-2 items-center ">
            <div className="flex flex-row space-x-2 items-center justify-center border-2 p-2 border-gray-300 rounded-md max-w-28 px-3">
              <RiGroupLine size={18} color="gray" />
              <span className="text-sm font-normal text-gray-500">Share</span>
            </div>
            <div className="h-8 w-[1px] bg-gray-400 flex" />
            <div className="h-10 w-10 bg-gray-200 rounded-lg p-1 flex items-center justify-center hover:cursor-pointer">
              <SlGrid size={20} color="gray" />
            </div>
            <div className="h-10 w-10 bg-gray-50 rounded-lg p-1 flex items-center justify-center hover:cursor-pointer">
              <SlLayers size={20} color="gray" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full ">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex flex-row overflow-x-scroll h-full  w-full ">
            <ColumnComponent
              title="To do"
              items={state.planned}
              droppableId="planned"
              color="bg-gray-300"
            />
            <ColumnComponent
              title="In Progress"
              items={state.inProgress}
              droppableId="inProgress"
              color="bg-yellow-300"
            />
            <ColumnComponent
              title="Completed"
              items={state.done}
              droppableId="done"
              color="bg-green-300"
            />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
