import { signIn } from "@/lib/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleSignInButton: React.FC = () => {
  return (
    <form
      action={async () => {
        "use server";
        console.log("use server");
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <button className="w-full" type="submit">
        <div className="hover:cursor-pointer m-2 w-full border-2 flex p-4 rounded-lg items-center justify-center space-x-4">
          <FcGoogle className="text-2xl" />
          <span>Sign in with Google</span>
        </div>
      </button>
    </form>
  );
};

export default GoogleSignInButton;
