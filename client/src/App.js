import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Auth from './utils/auth/auth';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Donation from './Components/Donation';
import Notifications from './Components/Notifications';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { ProjectProvider } from './utils/context/ProjectContext';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
            
            <Route 
                path="/" 
                element={Auth.loggedIn() ?
                (<Dashboard />) : (<Home />)} 
              />
              <Route 
                  path="/" 
                  element={Auth.loggedIn() ?
                  (<Dashboard />) : (<Home />)} 
                />
                <Route 
                  path="/dashboard" 
                  element={<Dashboard />} 
                />
                <Route 
                  path="/login" 
                  element={<Login />} 
                />
                <Route 
                  path="/signup" 
                  element={<Signup />} 
                />
                <Route 
                  path="/donation" 
                  element={<Donation />} 
                />
                <Route 
                  path="/notifications" 
                  element={<Notifications />} 
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      {/* </ProjectProvider> */}
    </ApolloProvider>
  );
}

export default App;
