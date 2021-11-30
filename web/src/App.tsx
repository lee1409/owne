import { ThemeProvider as MuiThemeProvider } from "@material-ui/core"
import Router from "./router"
import theme from "./utils/theme"
import { ApolloProvider } from "@apollo/client"
import { ModalProvider } from "./contexts/ModalContext"
import client from "./api/client"

function App() {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <ModalProvider>
          <Router />
        </ModalProvider>
      </MuiThemeProvider>
    </ApolloProvider>
  )
}

export default App
