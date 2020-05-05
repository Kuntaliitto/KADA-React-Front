
import { withApollo } from 'next-apollo';
import fetch from 'cross-fetch';
import ApolloClient, { InMemoryCache } from "apollo-boost";

const apolloClient = new ApolloClient({
  uri: 'http://local.pori.fi:9100/graphql',
  fetch: fetch,
  cache: new InMemoryCache()
});

export default withApollo(apolloClient);
