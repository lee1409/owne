import { ThemeProvider } from "@material-ui/core"
import Router from "./Router"
import theme from "./utils/theme"
import { ApolloProvider } from "@apollo/client"
import client from "./api/client"

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
