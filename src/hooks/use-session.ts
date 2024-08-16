import { SessionContext, SessionContextValue } from '@/contexts/session-context';
import * as React from 'react';

function useSession(): SessionContextValue {
  const context = React.useContext(SessionContext);

  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }

  return context;
}

export default useSession