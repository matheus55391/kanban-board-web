'use client'

import useSession from "@/hooks/use-session";
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  const { handleSignOut } = useSession();

  return (
    <div className="py-2 hover:cursor-pointer" onClick={handleSignOut}>
      <BiLogOut className="text-white " size={24} />
    </div>
  );
};

export default LogoutButton