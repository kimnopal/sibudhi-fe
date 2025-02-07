// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import AppRest from './AppRest';
import AppGraphql from './AppGraphql';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "http://graphql.pastilulus.me/graphql",
  cache: new InMemoryCache()
});

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/reports/rest" element={<AppRest />} />
        <Route path="/reports/graphql" element={<AppGraphql />} />
      </Routes>
    </ApolloProvider>
  </BrowserRouter>,
)
