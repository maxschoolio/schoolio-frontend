import { AuthProvider } from '@/context/auth/auth';
import { PropsWithChildren } from 'react';

export const ContextProviders = ({ children }: PropsWithChildren) => (
  <AuthProvider>{children}</AuthProvider>
);
