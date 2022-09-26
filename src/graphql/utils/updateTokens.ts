import { tokens } from '@/services/tokens';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { ErrorResponse } from '@apollo/client/link/error';
import {
  RefreshDocument,
  RefreshMutationResult,
} from '@graphql/generated/types';
import { GraphQLError } from 'graphql';

type TokenData = Omit<ErrorResponse, 'networkError'> & {
  client: ApolloClient<NormalizedCacheObject>;
};

type UpdateTokens = (data: TokenData) => Promise<void>;

export const updateTokens: UpdateTokens = async ({ client, operation }) => {
  try {
    const { data } = await client.mutate<RefreshMutationResult['data']>({
      mutation: RefreshDocument,
    });

    const refreshData = data?.refresh;

    if (!refreshData) {
      throw new GraphQLError('Empty refresh token');
    }

    const { accessToken, refreshToken } = refreshData;

    const headers = operation.getContext().headers;

    operation.setContext({
      headers: {
        ...headers,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    tokens.set(accessToken, refreshToken);
  } catch (error) {
    tokens.remove();
    throw error;
  }
};
