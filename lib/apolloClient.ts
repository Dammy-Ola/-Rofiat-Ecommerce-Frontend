import { ApolloClient } from '@apollo/client'
import { InMemoryCache } from '@apollo/client/cache'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
})

export default apolloClient
