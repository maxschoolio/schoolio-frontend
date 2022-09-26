import { tokens } from '@/services/tokens';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { FetchResult } from '@apollo/client/link/core/types';
import { onError } from '@apollo/client/link/error';
import { Observable } from '@apollo/client/utilities';
import { getErrorMessage } from '@graphql/utils/getErrorMessage';
import { getIsUnauthenticatedError } from '@graphql/utils/getIsUnauthenticatedError';
import { updateTokens } from '@graphql/utils/updateTokens';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((operation, { headers }) => {
  const { access, refresh } = tokens.get();
  const token = operation.operationName === 'Refresh' ? refresh : access;

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError(({ networkError, ...rest }) => {
  if (networkError) {
    toast.error('Network error');
    return;
  }

  if (!getIsUnauthenticatedError(rest)) {
    toast.error(getErrorMessage(rest));
    return;
  }

  return new Observable<FetchResult>((observer) => {
    (async () => {
      try {
        await updateTokens({ client, ...rest });

        const { forward, operation } = rest;

        const subscriber = {
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        };

        return forward(operation).subscribe(subscriber);
      } catch (err) {
        observer.error(err);
      }
    })();
  });
});

export const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});
