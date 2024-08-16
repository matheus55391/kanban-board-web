'use client';
import { getFirebaseAuth } from "@/lib/auth/getFirebaseAuth";
import { Auth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import Divider from "../core/divider";
import SignUpLinkButton from "../SignUpLinkButton";
import GithubSignInButton from "./github-signin-button";
import GoogleSignInButton from "./google-signin-button.tsx";

interface OAuthProvider {
  providerId: 'google' | 'github';

}

const oAuthProviders = [{ providerId: 'google' }, { providerId: 'github'}] satisfies OAuthProvider[];

const LoginView: React.FC = () => {
  const [firebaseAuth] = React.useState<Auth>(getFirebaseAuth());
  const [isPending, setIsPending] = React.useState<boolean>(false);

  const onAuth = React.useCallback(
    async (providerId: OAuthProvider['providerId']): Promise<void> => {
      setIsPending(true);
  
      let provider: GoogleAuthProvider | GithubAuthProvider;
  
      switch (providerId) {
        case 'google':
          provider = new GoogleAuthProvider();
          break;
        case 'github':
          provider = new GithubAuthProvider();
          break;
        default:
          throw new Error(`Unknown provider: ${providerId}`);
      }
  
      try {
        await signInWithPopup(firebaseAuth, provider);
        // UserProvider will handle Router refresh
        // After refresh, GuestGuard will handle the redirect
      } catch (err) {
        setIsPending(false);
        // toast.error((err as { message: string }).message);
      }
    },
    [firebaseAuth]
  );

  return (
    <div className="flex flex-col h-screen bg-zinc-100">
      <header className="text-zinc-800 p-4 md:px-14 flex justify-between items-center">
        <h1 className="text-2xl font-bold">KanbanBoard</h1>
        <div className="flex flex-row space-x-2 items-center">
          <p className="text-xs font-medium text-zinc-800">Not a member?</p>
          <SignUpLinkButton />
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center text-center justify-center">
        <div className="flex flex-col bg-white p-10 py-16  rounded-xl shadow-sm space-y-2">
          <h1 className="text-4xl font-bold mb-4 text-zinc-700">
            Welcome back!
          </h1>
          <p className="text-sm text-gray-500">
            Please chose the way you want to sign in to continue.
          </p>
          <GithubSignInButton onSubmit={() => onAuth(oAuthProviders[1].providerId)} isPending={isPending} />
          <Divider>OR</Divider>
          <GoogleSignInButton onSubmit={() => onAuth(oAuthProviders[0].providerId)} isPending={isPending} />
        </div>
      </main>
    </div>
  );
};

export default LoginView;
