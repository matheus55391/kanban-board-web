"use client";

import * as React from "react";
import { onAuthStateChanged } from "firebase/auth";
import type { Auth } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/auth/getFirebaseAuth";

export interface User {
  id: string;
  name?: string;
  avatar?: string;
  email?: string;

  [key: string]: unknown;
}

export interface UserContextValue {
  user: User | null;
  error: string | null;
  isLoading: boolean;
  token: string | null;
  checkSession?: () => Promise<void>;
}

export const UserContext = React.createContext<UserContextValue | undefined>(
  undefined
);

export interface UserProviderProps {
  children: React.ReactNode;
}

export function UserProvider({
  children,
}: UserProviderProps): React.JSX.Element {
  const [firebaseAuth] = React.useState<Auth>(getFirebaseAuth());

  const [state, setState] = React.useState<{
    user: User | null;
    error: string | null;
    isLoading: boolean;
    token: string | null;
  }>({
    user: null,
    token: null,
    error: null,
    isLoading: true,
  });

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      const token = (await user?.getIdToken()) ?? null;
      setState((prev) => ({
        ...prev,
        user: user
          ? ({
              id: user.uid,
              email: user.email ?? undefined,
              name: user.displayName ?? undefined,
              avatar: user.photoURL ?? undefined,
            } satisfies User)
          : null,
        token,
        error: null,
        isLoading: false,
      }));
    });

    return () => {
      unsubscribe();
    };
  }, [firebaseAuth]);

  return (
    <UserContext.Provider value={{ ...state }}>{children}</UserContext.Provider>
  );
}

export const UserConsumer = UserContext.Consumer;
