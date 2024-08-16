import React from "react";

interface DividerProps {
  children?: React.ReactNode;
}

const Divider: React.FC<DividerProps> = ({ children }) => {
  return (
    <div className="flex flex-row items-center space-x-2 my-2">
      <div className="w-full flex flex-row space-x-2 bg-gray-200 h-[0.5px]" />
      {children && (
        <>
          <span className="text-xs text-gray-300">{children}</span>
          <div className="w-full flex flex-row space-x-2 bg-gray-200 h-[0.5px]" />
        </>
      )}
    </div>
  );
};

export default Divider;
