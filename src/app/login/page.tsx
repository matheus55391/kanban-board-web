import { signIn } from "@/libs/auth";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-zinc-50">
      <header className=" text-zinc-800 p-4 md:px-14 flex justify-between items-center">
        <h1 className="text-2xl font-bold">KanbanBoard</h1>
        <div className="flex flex-row space-x-2 items-center">
          <p className="text-xs font-medium text-zinc-800">Not a member?</p>
          <button className="text-white bg-rose-500 px-4 py-2 rounded-lg shadow-lg shadow-rose-200 text-sm font-semibold">
            Sign Up
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center text-center justify-center">
        <div className="flex flex-col bg-white p-10 rounded-xl shadow-sm space-y-2">
          <h1 className="text-4xl font-bold mb-4 text-zinc-700">
            Wellcome back!
          </h1>
          <div className="w-80">
            <div className="space-y-6 ">
              <div className="flex flex-col align-baseline text-left">
                <span className="text-xs font-medium ">Email Address</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-2 border rounded-md placeholder:text-sm"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col align-baseline text-left">
                <span className="text-xs font-medium ">Password</span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="p-2 border rounded-md placeholder:text-sm"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-md transition-all"
              >
                Log In
              </button>
              <div className="flex flex-row items-center space-x-2">
                <div className="w-full flex flex-row space-x-2 bg-gray-200 h-[0.5px]" />
                <span className="text-xs text-gray-300">OR</span>
                <div className="w-full flex flex-row space-x-2 bg-gray-200 h-[0.5px]" />
              </div>
              <div>
                <form
                  action={async () => {
                    "use server";
                    await signIn("google");
                  }}
                >
                  <button
                    type="submit"
                    className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-6 rounded-md transition-all"
                  >
                    Log In with Google
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
