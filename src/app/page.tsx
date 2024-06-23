"use client";
import React, { useState } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import ColumnComponent from "../components/ColumnComponent";
import { BoardManager, State } from "../utils/BoardManager";
import KanbanBoard from "@/components/KanbanBoard";

const Page: React.FC = () => {
  return (
    <>
      <KanbanBoard />
    </>
  );
};

export default Page;
