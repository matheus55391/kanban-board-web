import { Draggable } from "@hello-pangea/dnd";
import React from "react";

interface Tag {
  name: string;
  color: string;
}

interface TaskItemCardProps {
  id: string;
  title: string;
  tags: Tag[];
  date: string;
  index: number;
}

const getItemStyle = (isDragging: boolean): string =>
  `flex w-full justify-center items-center rounded ${
    isDragging ? "opacity-90" : ""
  }`;

const TaskItemCard: React.FC<TaskItemCardProps> = ({
  id,
  title,
  tags,
  date,
  index,
}) => (
  <Draggable draggableId={id} index={index}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={getItemStyle(snapshot.isDragging)}
        style={provided.draggableProps.style}
      >
        <div className="flex flex-col rounded-md p-4 bg-white w-full h-full border-[1px] border-gray-300">
          <h1 className="text-sm font-semibold text-black">{title}</h1>
          <div className="flex flex-row space-x-2 py-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className={`rounded-lg p-2 text-xs text-white ${tag.color}`}
              >
                <span className="font-light">{tag.name}</span>
              </div>
            ))}
          </div>
          <div>
            <span className="text-xs text-gray-400">{date}</span>
          </div>
        </div>
      </div>
    )}
  </Draggable>
);

export default TaskItemCard;
