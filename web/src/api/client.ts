import { ApolloClient, InMemoryCache } from "@apollo/client"

if (!process.env.REACT_APP_PUBLIC_URL) {
  throw new Error("Please define graphql URL!")
}

const client = new ApolloClient({
  uri: process.env.REACT_APP_PUBLIC_URL,
  cache: new InMemoryCache(),
})

export default client
