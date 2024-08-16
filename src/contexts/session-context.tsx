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

export interface SessionContextValue {
  user?: User | null;
  error?: string | null; 
  isLoading: boolean ;
  token?: string | null;
  checkSession?: () => Promise<void>;
}

const defaultValue: SessionContextValue = {
  user: null,
  error: null,
  token: null,
  isLoading: true,
};

export const SessionContext = React.createContext<SessionContextValue>(
  defaultValue
);

export interface SessionProviderProps {
  children: React.ReactNode;
}

export function SessionProvider({
  children,
}: SessionProviderProps): React.JSX.Element {
  const [firebaseAuth] = React.useState<Auth>(getFirebaseAuth());
  const [state, setState] = React.useState<SessionContextValue>(defaultValue);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      const token = user ? await user.getIdToken() : undefined;

      setState((prev) => ({
        ...prev,
        user: user ? ({
          id: user.uid,
          email: user.email ?? undefined,
          name: user.displayName ?? undefined,
          avatar: user.photoURL ?? undefined,
        } satisfies User) : null,
        token,
        isLoading: false,
        error: null,
      }));
    });

    return () => {
      unsubscribe();
    };
  }, [firebaseAuth]);

  return (
    <SessionContext.Provider value={state}>
      {children}
    </SessionContext.Provider>
  );
}
