import { App } from './App';
import { ContextProviders } from '@/context/providers';
import { ApolloProvider } from '@apollo/client';
import { client } from '@graphql/apolloClient';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.StrictMode>
        <ContextProviders>
          <App />
        </ContextProviders>
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>,
);
