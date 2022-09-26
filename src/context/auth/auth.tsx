import { tokens } from '@/services/tokens';
import { ClientUser, SignInOutput } from '@graphql/generated/types';
import { createContext, PropsWithChildren, useState } from 'react';

interface AuthContextType {
  user: ClientUser | null;
  signInSuccess: (data: SignInOutput) => void;
  signOut: () => Promise<void>;
  checkTokenSuccess: (user: ClientUser) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  /* eslint-disable @typescript-eslint/no-empty-function */
  signInSuccess: () => {},
  signOut: () => Promise.resolve(),
  checkTokenSuccess: () => {},
  /* eslint-enable @typescript-eslint/no-empty-function */
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<AuthContextType['user']>(null);

  const signInSuccess = ({ user, accessToken, refreshToken }: SignInOutput) => {
    setUser(user);
    tokens.set(accessToken, refreshToken);
  };

  const signOut = (): Promise<void> =>
    new Promise((resolve) => {
      tokens.remove();
      setUser(null);
      resolve();
    });

  const checkTokenSuccess = (user: ClientUser) => setUser(user);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInSuccess,
        signOut,
        checkTokenSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
