import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ClientUser = {
  __typename?: 'ClientUser';
  id: Scalars['Int'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  refresh: SignInOutput;
  signIn: SignInOutput;
  signUp: ClientUser;
};

export type MutationSignInArgs = {
  authCredentials: SignInInput;
};

export type MutationSignUpArgs = {
  authCredentials: SignUpInput;
};

export type Pet = {
  __typename?: 'Pet';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  checkToken: ClientUser;
  pets: Array<Pet>;
  user: ClientUser;
  users: Array<ClientUser>;
};

export type QueryUserArgs = {
  username: Scalars['String'];
};

export type SignInInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SignInOutput = {
  __typename?: 'SignInOutput';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  user: ClientUser;
};

export type SignUpInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;

export type SignUpMutation = {
  __typename?: 'Mutation';
  signUp: { __typename?: 'ClientUser'; username: string };
};

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;

export type SignInMutation = {
  __typename?: 'Mutation';
  signIn: {
    __typename?: 'SignInOutput';
    accessToken: string;
    refreshToken: string;
    user: { __typename?: 'ClientUser'; id: number; username: string };
  };
};

export type RefreshMutationVariables = Exact<{ [key: string]: never }>;

export type RefreshMutation = {
  __typename?: 'Mutation';
  refresh: {
    __typename?: 'SignInOutput';
    accessToken: string;
    refreshToken: string;
    user: { __typename?: 'ClientUser'; id: number; username: string };
  };
};

export type CheckTokenQueryVariables = Exact<{ [key: string]: never }>;

export type CheckTokenQuery = {
  __typename?: 'Query';
  checkToken: { __typename?: 'ClientUser'; id: number; username: string };
};

export type GetPetsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPetsQuery = {
  __typename?: 'Query';
  pets: Array<{ __typename?: 'Pet'; name: string; id: number }>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: 'Query';
  users: Array<{ __typename?: 'ClientUser'; username: string; id: number }>;
};

export const SignUpDocument = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(authCredentials: $input) {
      username
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    options,
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const SignInDocument = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(authCredentials: $input) {
      user {
        id
        username
      }
      accessToken
      refreshToken
    }
  }
`;
export type SignInMutationFn = Apollo.MutationFunction<
  SignInMutation,
  SignInMutationVariables
>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument,
    options,
  );
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutation,
  SignInMutationVariables
>;
export const RefreshDocument = gql`
  mutation Refresh {
    refresh {
      user {
        id
        username
      }
      accessToken
      refreshToken
    }
  }
`;
export type RefreshMutationFn = Apollo.MutationFunction<
  RefreshMutation,
  RefreshMutationVariables
>;

/**
 * __useRefreshMutation__
 *
 * To run a mutation, you first call `useRefreshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshMutation, { data, loading, error }] = useRefreshMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RefreshMutation,
    RefreshMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RefreshMutation, RefreshMutationVariables>(
    RefreshDocument,
    options,
  );
}
export type RefreshMutationHookResult = ReturnType<typeof useRefreshMutation>;
export type RefreshMutationResult = Apollo.MutationResult<RefreshMutation>;
export type RefreshMutationOptions = Apollo.BaseMutationOptions<
  RefreshMutation,
  RefreshMutationVariables
>;
export const CheckTokenDocument = gql`
  query CheckToken {
    checkToken {
      id
      username
    }
  }
`;

/**
 * __useCheckTokenQuery__
 *
 * To run a query within a React component, call `useCheckTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckTokenQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CheckTokenQuery,
    CheckTokenQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CheckTokenQuery, CheckTokenQueryVariables>(
    CheckTokenDocument,
    options,
  );
}
export function useCheckTokenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CheckTokenQuery,
    CheckTokenQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CheckTokenQuery, CheckTokenQueryVariables>(
    CheckTokenDocument,
    options,
  );
}
export type CheckTokenQueryHookResult = ReturnType<typeof useCheckTokenQuery>;
export type CheckTokenLazyQueryHookResult = ReturnType<
  typeof useCheckTokenLazyQuery
>;
export type CheckTokenQueryResult = Apollo.QueryResult<
  CheckTokenQuery,
  CheckTokenQueryVariables
>;
export const GetPetsDocument = gql`
  query GetPets {
    pets {
      name
      id
    }
  }
`;

/**
 * __useGetPetsQuery__
 *
 * To run a query within a React component, call `useGetPetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPetsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPetsQuery, GetPetsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPetsQuery, GetPetsQueryVariables>(
    GetPetsDocument,
    options,
  );
}
export function useGetPetsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPetsQuery,
    GetPetsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPetsQuery, GetPetsQueryVariables>(
    GetPetsDocument,
    options,
  );
}
export type GetPetsQueryHookResult = ReturnType<typeof useGetPetsQuery>;
export type GetPetsLazyQueryHookResult = ReturnType<typeof useGetPetsLazyQuery>;
export type GetPetsQueryResult = Apollo.QueryResult<
  GetPetsQuery,
  GetPetsQueryVariables
>;
export const GetUsersDocument = gql`
  query GetUsers {
    users {
      username
      id
    }
  }
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
