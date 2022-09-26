import { ErrorResponse } from '@apollo/client/link/error';
import { GraphQLError } from 'graphql';

interface Response {
  statusCode?: number;
  message?: string;
}

const findError = (error: GraphQLError) =>
  (error?.extensions?.response as Response)?.statusCode === 401;

export const getIsUnauthenticatedError = ({
  response,
  graphQLErrors,
  operation: { operationName },
}: Omit<ErrorResponse, 'networkError'>): boolean => {
  if (operationName === 'SignIn') {
    return false;
  }

  const isGraphqlContainError = !!graphQLErrors?.find(findError);
  const isResponseContainError = !!response?.errors?.find(findError);

  return isGraphqlContainError || isResponseContainError;
};
