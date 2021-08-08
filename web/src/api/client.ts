import { ApolloClient, InMemoryCache } from "@apollo/client"

if (!process.env.REACT_APP_PUBLIC_URL) {
  throw new Error("Please define graphql URL!")
}

const client = new ApolloClient({
  uri: process.env.REACT_APP_PUBLIC_URL,
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === "development" ? true : false,
})

export default client
