'use client'

import { getFirebaseAuth } from "@/lib/auth/getFirebaseAuth";
import { Auth, signOut } from "firebase/auth";
import React from "react";
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  const [firebaseAuth] = React.useState<Auth>(getFirebaseAuth());

  const handleSignOut = React.useCallback(async (): Promise<void> => {
    try {
      await signOut(firebaseAuth);
      // UserProvider will handle Router refresh
      // After refresh, GuestGuard will handle the redirect
    } catch (err) {
      console.error(err);
      // logger.error('Sign out error', err);
      // toast.error('Something went wrong, unable to sign out');
    }
  }, [firebaseAuth]);

  return (
    <div className="py-2 hover:cursor-pointer" onClick={handleSignOut}>
      <BiLogOut className="text-white " size={24} />
    </div>
  );
};

export default LogoutButton