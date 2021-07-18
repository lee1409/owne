import { ThemeProvider } from "@material-ui/core"
import Router from "./Router"
import theme from "./utils/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
