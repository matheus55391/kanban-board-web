import { Droppable, DraggableProvided, DraggableStateSnapshot } from '@hello-pangea/dnd';
import React from 'react';
import ItemComponent from './ItemComponent';

interface ColumnProps {
  title: string;
  items: { id: string; content: string }[];
  droppableId: string;
}

const grid = 8;

const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
  background: isDraggingOver ? 'lightblue' : 'white', // Adicionei cores para indicar quando está arrastando sobre a área
  padding: grid,
});

const ColumnComponent: React.FC<ColumnProps> = ({ title, items, droppableId }) => (
  <Droppable droppableId={droppableId}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        style={getListStyle(snapshot.isDraggingOver)}
        className='flex flex-col min-w-72 space-y-2 m-2 p-4 overflow-hidden border border-gray-300 rounded-lg'
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        {items.map((item, index) => (
          <ItemComponent 
          key={item.id} 
          id={item.id}
          tags={[{ name: 'Front', color:'bg-red-600'}, { name: 'Mobile', color:'bg-purple-600'}]}
          title='Tarefa de teste'
          date='Marco de 2023' 
          index={index} 
          />
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default ColumnComponent;
