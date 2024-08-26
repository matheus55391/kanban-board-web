"use client";
import React, { useState } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import ColumnComponent from "./column-component";
import { BoardManager, State } from "@/utils/BoardManager";
import { IoIosAdd, IoLogoBuffer } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import useSession from "@/hooks/use-session";
import Image from "next/image";

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
      <div className="flex flex-row items-center justify-between pl-4 ">
        <div className="flex flex-row items-center space-x-2">
          <h1 className="text-2xl font-bold text-center">Project Board</h1>
          <div className="bg-gray-300 rounded-md h-5 w-5 flex items-center justify-center p-1 ">
            <MdOutlineModeEdit size={12} color="black" />
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <div className="flex flex-row items-center space-x-2">
            <div className="bg-gray-300 rounded-md h-5 w-5 flex items-center justify-center p-1 ">
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
