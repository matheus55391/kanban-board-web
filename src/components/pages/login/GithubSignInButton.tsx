import React from "react";
import { FaGithub } from "react-icons/fa";

const GithubSignInButton: React.FC = () => {
  return (
    <form
      // action={async () => {
      //   "use server";
      //   console.log("use server");
      //   // await signIn("github", { redirectTo: "/dashboard" });
      // }}
    >
      <button className="w-full" type="submit">
        <div className="hover:cursor-pointer m-2 w-full border-2 flex p-4 rounded-lg items-center justify-center space-x-4 bg-zinc-800 ">
          <FaGithub className="text-2xl" color="white" />
          <span className="text-white">Sign In with Github</span>
        </div>
      </button>
    </form>
  );
};

export default GithubSignInButton;
