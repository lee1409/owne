import { ThemeProvider } from "@material-ui/core"
import { Root } from "@mui-treasury/layout"
import Router from "./Router"
import theme from "./utils/theme"
import { scheme } from "./components/Layout"

function App() {
  return (
    <Root scheme={scheme}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Root>
  )
}

export default App
