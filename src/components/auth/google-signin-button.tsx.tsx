// import { signIn } from "@/lib/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";

interface GoogleSignInButtonProps {
  onSubmit: () => void;
  isPending: boolean;
}
const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({ onSubmit, isPending = false }) => {
  return (
    <button className="w-full" onClick={onSubmit} disabled={isPending}>
      <div className="hover:cursor-pointer m-2 w-full border-2 flex p-4 rounded-lg items-center justify-center space-x-4">
        <FcGoogle className="text-2xl" />
        <span>Sign in with Google</span>
      </div>
    </button>
  );
};

export default GoogleSignInButton;
