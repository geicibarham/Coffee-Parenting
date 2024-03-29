import "./App.css";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


import React from "react";
import Header from "./components/header";
import LandingPage from "./components/landing-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Main from "./components/main";
import UserPage from "./components/user-page";
import Join from "./components/join";
import NoMatch from "../../client/src/pages/NoMatch";
import SinglePost from "./components/single-post";
import Activities from "./components/activities";
import Sixmonths from "./components/activities/6months";
import OneThree from "./components/activities/one-three";
import Three from "./components/activities/3+";
import Names from "./components/friend-list";
import Home from "./components/home/home";




const httpLink = createHttpLink({
  uri: "/graphql",
});
// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("id_token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),

});

function App() {
  return (


    <ApolloProvider client={client}>
      <>
        <Router>
          {/* <div className="flex-column justify-flex-start min-100-vh"> */}
            {/* < LandingPage /> */}
            <Header />

            <Routes>
              <Route path="/names" element={<Names />} />
              <Route path="/" element={<Home />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/sixmonths" element={<Sixmonths />} />
              <Route path="/one-three" element={<OneThree />} />
              <Route path="/three" element={<Three />} />
              <Route path="/join" element={<Join />} />
              <Route path="/login" element={<Login />} />
              <Route path="/main" element={<Main />} />
              <Route path="/user-page" element={<UserPage />} />
              <Route
                path="/post/:id"
                element={<SinglePost />}
              />
              <Route path="*" element={<NoMatch />} />

            </Routes>
          {/* </div> */}
        </Router>
      </>
    </ApolloProvider>

  );
}

export default App;