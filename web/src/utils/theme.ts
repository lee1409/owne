import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#424242",
      "500": "#bdbdbd",
    },
    background: {
      default: "#ffffff",
    },
  },
})

export default theme
