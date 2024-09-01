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
        className="flex flex-col space-y-2 p-4 border rounded-xl min-w-56 max-w-96 max-h-full"
      >
        <div
          className={`flex flex-row items-center border-b-2 py-2 pb-3 mb-2 space-x-2`}
        >
          <div className={`w-2 h-2 mr-1 rounded-full  ${color}`} />
          <h2 className="text-base font-semibold text-black dark:text-white rounded-full ">
            {title}
          </h2>
          <div className="flex items-center justify-center rounded-full h-5 w-5 border border-zinc-300">
            <span className="text-xs  ">{items.length}</span>
          </div>
        </div>

        <div className="flex flex-col space-y-2 max-h-full overflow-y-scroll px-2 no-scrollbar">
          {items.map((item, index) => (
            <ItemComponent
              key={item.id}
              id={item.id}
              tags={[
                { name: "Front", color: "bg-red-500" },
                { name: "Mobile", color: "bg-purple-500" },
              ]}
              title="Tarefa de teste"
              date="Marco de 2023"
              index={index}
            />
          ))}
          {provided.placeholder}
        </div>
      </div>
    )}
  </Droppable>
);

export default ColumnComponent;
