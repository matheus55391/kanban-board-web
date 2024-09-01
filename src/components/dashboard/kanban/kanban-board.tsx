"use client";

import { Button } from "@/components/ui/button";
import useSession from "@/hooks/use-session";
import { BoardManager, State } from "@/utils/BoardManager";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import Image from "next/image";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
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
    <div className="flex flex-col min-h-full max-h-full overflow-hidden .no-scrollbar ">
      <div className="flex flex-col w-full space-y-4 mb-4">
        <div className="flex flex-col lg:flex-row  lg:items-center space-y-2 justify-between ">
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
          <Button variant="outline" className="flex flex-row space-x-2">
            <CiFilter size={18} color="gray" />
            <span className="text-sm font-normal">Filter</span>
            <TfiAngleDown size={18} color="gray" />
          </Button>
          <div className="flex flex-row h-full">
            <Button variant="outline" className="flex flex-row space-x-2">
              <RiGroupLine size={18} color="gray" />
              <span className="text-sm font-normal">Share</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="  max-h-full overflow-scroll p-2 .no-scrollbar ">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex flex-row space-x-4 p-2  max-h-full">
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
