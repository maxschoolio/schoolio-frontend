import { ErrorResponse } from '@apollo/client/link/error';

export const getErrorMessage = ({
  response,
  graphQLErrors,
}: Omit<ErrorResponse, 'networkError'>): string => {
  const graphqlError = graphQLErrors?.[0].message;
  const responseError = response?.errors?.[0].message;

  return graphqlError ?? responseError ?? 'Unknown error';
};
