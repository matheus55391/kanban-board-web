'use client'
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react"

const LogoutIconButton = () => {
  return (
    <div className="py-2" onClick={() => signOut()}>
      <BiLogOut className="text-white " size={24} />
    </div>
  );
};

export default LogoutIconButton