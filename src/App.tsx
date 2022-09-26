import { AuthContext } from '@/context/auth/auth';
import { AppRoutes } from '@/pages/AppRoutes';
import { tokens } from '@/services/tokens';
import { CssReset, CssGlobal } from '@/styles';
import {
  CheckTokenQuery,
  useCheckTokenLazyQuery,
} from '@graphql/generated/types';
import { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  const [checkTokenQuery] = useCheckTokenLazyQuery({
    onCompleted: (data: CheckTokenQuery) => checkTokenSuccess(data.checkToken),
  });

  const { checkTokenSuccess } = useContext(AuthContext);

  useEffect(() => {
    if (!tokens.get().access) {
      return;
    }

    checkTokenQuery();
  }, [checkTokenQuery]);

  return (
    <>
      <ToastContainer hideProgressBar />
      <CssReset />
      <CssGlobal />
      <AppRoutes />
    </>
  );
};
