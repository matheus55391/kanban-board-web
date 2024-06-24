import Link from "next/link";
import React from "react";
import { BiRightIndent } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-zinc-50">
      <header className=" text-black p-4 md:px-14 flex justify-between items-center">
        <h1 className="text-2xl font-bold">KanbanBoard</h1>
        <div className="flex gap-4">
          <div className="text-black border  rounded-xl p-1 px-1  flex flex-row space-x-1 text-sm ">
            <button className="hover:bg-gray-200 p-2 rounded-xl px-2 transition-all text-sm font-medium">
              Log in
            </button>
            <button className="text-white rounded-xl bg-rose-500 transition-all hover:bg-rose-600 font-medium text-sm px-2">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col  items-center text-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-zinc-700">
          The best way to organize your work
        </h1>
        <p className="mb-8">
          Simplifying your job in a stylish and straightforward manner
        </p>
        <div>
          <Link href="/dashboard">
            <button className="flex flex-row  items-center  space-x-4 bg-rose-500 transition-all hover:bg-rose-600 text-white font-bold py-3 px-6 hover:py-4 hover:px-8  rounded">
              <span>Get started. 100% FREE</span>
              <FaArrowRight size={16} />
            </button>
          </Link>
          <p className="text-sm p-2 font-medium text-zinc-700">
            Free Forever. No Credit Card.
          </p>
        </div>
      </main>

      <footer className="bg-zinc-100 p-6 text-center flex flex-row space-x-2 w-screen  ">
        <p className="text-sm mr-auto">
          © 2024 KanbanBoard. All rights reserved.
        </p>
        <p className="text-sm ">Build with ♥</p>
      </footer>
    </div>
  );
};

export default Page;
