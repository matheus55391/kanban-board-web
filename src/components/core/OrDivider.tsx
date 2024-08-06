import React from 'react';

const OrDivider: React.FC = () => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <div className="w-full flex flex-row space-x-2 bg-gray-200 h-[0.5px]" />
      <span className="text-xs text-gray-300">OR</span>
      <div className="w-full flex flex-row space-x-2 bg-gray-200 h-[0.5px]" />
    </div>
  );
};

export default OrDivider;
