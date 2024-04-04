import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // uri: 'https://demographql.onrender.com/graphql',
  uri: 'http://localhost:5008/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
);
