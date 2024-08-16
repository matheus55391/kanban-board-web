import { AuthGuard } from '@/components/guards/auth-guard';
import * as React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <AuthGuard>
      {children}
    </AuthGuard>
  );
}
