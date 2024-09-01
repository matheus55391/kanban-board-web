import { Draggable } from "@hello-pangea/dnd";
import React from "react";
import { BiMessage } from "react-icons/bi";

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
  `flex w-full justify-center items-center rounded-lg border ${
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
        <div className="flex flex-col rounded-lg p-4  w-full max-w-80 min-h-24 space-y-2">
          <div className="flex flex-row space-x-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className={`flex items-center justify-center rounded-sm h-6 min-w-8 p-2 text-xs text-white ${tag.color}`}
              >
                <span className="font-light text-xs">{tag.name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-2" >
            <h1 className="text-base font-medium text-black dark:text-white">{title}</h1>
            <span className="text-xs text-gray-400">
              Brainstorming brings team members diverse experience into play.
            </span>
          </div>
          <div className="flex flex-row pt-3">
            <div className="flex flex-row  items-center space-x-1">
              <BiMessage size={14} className="text-gray-400" />
              <span className="text-xs text-gray-400" >10 comments</span>
            </div>
          </div>
        </div>
      </div>
    )}
  </Draggable>
);

export default TaskItemCard;
