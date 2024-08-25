import { Droppable } from "@hello-pangea/dnd";
import React from "react";
import ItemComponent from "./item-component";

interface ColumnProps {
  title: string;
  items: { id: string; content: string }[];
  droppableId: string;
  color?: string;
}

const ColumnComponent: React.FC<ColumnProps> = ({
  title,
  items,
  droppableId,
  color = "bg-red-600",
}) => (
  <Droppable droppableId={droppableId}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        className="flex flex-col min-w-72 space-y-2 m-2 p-4 bg-gray-100 rounded-xl "
      >
        <div className={`flex flex-row items-center space-x-1 border-b-2 py-2 pb-3 mb-2`}>
          <div className={`w-2 h-2 mr-1 rounded-full ${color}`}></div>
          <h2 className="text-sm font-medium text-black rounded-full">{title}</h2>
          <span className="text-xs text-gray-400 bg-gray-200 rounded-full w-4 h-4 text-center">{items.length}</span>
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
