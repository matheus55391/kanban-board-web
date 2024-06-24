"use client";
import React, { useState } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import ColumnComponent from "./ColumnComponent";
import { BoardManager, State } from "@/utils/BoardManager";

export default function KanbanBoard() {
  const [state, setState] = useState<State>(BoardManager.initialState);

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
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-row overflow-x-scroll  h-full w-full ">
        <ColumnComponent
          title="Todo"
          items={state.planned}
          droppableId="planned"
        />
        <ColumnComponent
          title="In Progress"
          items={state.inProgress}
          droppableId="inProgress"
        />
        <ColumnComponent
          title="Completed"
          items={state.done}
          droppableId="done"
        />
      </div>
    </DragDropContext>
  );
}
