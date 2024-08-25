"use client";

import * as React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase/client";

export interface User {
  id: string;
  name?: string;
  avatar?: string;
  email?: string;

  [key: string]: unknown;
}

export interface SessionContextValue {
  user?: User | null | undefined;
  error?: string | null; 
  token?: string | null;
  isLoading: boolean ;
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
  const [state, setState] = React.useState<SessionContextValue>(defaultValue);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const token = user ? await user.getIdToken() : undefined;

      setState((prev) => ({
        ...prev,
        user: user ? ({
          id: user.uid,
          email: user.email ?? undefined,
          name: user.displayName ?? undefined,
          avatar: user.photoURL ?? undefined,
        } satisfies User) : undefined,
        token,
        isLoading: false,
        error: null,
      }));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SessionContext.Provider value={state}>
      {children}
    </SessionContext.Provider>
  );
}
