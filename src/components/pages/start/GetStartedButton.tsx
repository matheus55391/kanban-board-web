import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const GetStartedButton: React.FC = () => {
  return (
    <Link href="/dashboard">
      <button className="flex flex-row items-center space-x-4 bg-rose-500 transition-all hover:bg-rose-600 text-white font-bold py-3 px-6 hover:py-4 hover:px-8 rounded">
        <span>Get started. 100% FREE</span>
        <FaArrowRight size={16} />
      </button>
    </Link>
  );
};

export default GetStartedButton;
