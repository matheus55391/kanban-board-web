import {
  Droppable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "@hello-pangea/dnd";
import React from "react";
import ItemComponent from "./ItemComponent";

interface ColumnProps {
  title: string;
  items: { id: string; content: string }[];
  droppableId: string;
}


const ColumnComponent: React.FC<ColumnProps> = ({
  title,
  items,
  droppableId,
}) => (
  <Droppable droppableId={droppableId}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        className="flex flex-col min-w-72 space-y-2  m-2 p-2 "
      >
        <div className="flex flex-row items-center space-x-1">
          <div className="w-3 h-3 rounded-full  bg-gray-300"></div>
          <h2 className="text-base font-medium text-gray-400">{title}(1)</h2>
        </div>

        {items.map((item, index) => (
          <ItemComponent
            key={item.id}
            id={item.id}
            tags={[
              { name: "Front", color: "bg-red-600" },
              { name: "Mobile", color: "bg-purple-600" },
            ]}
            title="Tarefa de teste"
            date="Marco de 2023"
            index={index}
          />
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default ColumnComponent;
