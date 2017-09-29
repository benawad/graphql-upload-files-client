import React from "react";
import ReactDOM from "react-dom";
import { createNetworkInterface } from "apollo-upload-client";
import { ApolloClient, ApolloProvider } from "react-apollo";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: "http://localhost:3030/graphql"
  })
});

const Apollo = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(Apollo, document.getElementById("root"));
registerServiceWorker();
