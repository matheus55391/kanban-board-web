import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const SplashScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <FaSpinner className="animate-spin text-6xl" />
    </div>
  );
};

export default SplashScreen;
