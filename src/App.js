import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-client";
import routing from "../routes.js";
import { InMemoryCache, HttpLink } from "apollo-boost";
import { SchemaLink } from "apollo-link-schema";

const Routes = ({ routes }) => {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return (
    <Router>
      <Switch>{routeComponents}</Switch>
    </Router>
  );
};

const App = ({ data }) => {
  const schema = data;

  const client = new ApolloClient({
    link: data
      ? new SchemaLink({ schema })
      : new HttpLink({ uri: "http://localhost:4000/graphql" }),
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  });

  return (
    <ApolloProvider client={client}>
      <Routes routes={routing} />
    </ApolloProvider>
  );
};

export default App;
