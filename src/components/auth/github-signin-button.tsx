import React from "react";
import { FaGithub } from "react-icons/fa";

interface GithubSignInButtonProps {
  onSubmit: () => void;
  isPending?: boolean;
}
const GithubSignInButton: React.FC<GithubSignInButtonProps> = ({ onSubmit, isPending = false }) => {
  return (
    <button className="w-full" onClick={onSubmit} disabled={isPending}>
      <div className="hover:cursor-pointer m-2 w-full border-10 border-black flex p-4 rounded-lg items-center justify-center space-x-4 bg-zinc-800 ">
        <FaGithub className="text-2xl" color="white" />
        <span className="text-white">Sign In with Github</span>
      </div>
    </button>
  );
};

export default GithubSignInButton;
