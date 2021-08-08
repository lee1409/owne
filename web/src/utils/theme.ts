import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import { ColorPartial } from "@material-ui/core/styles/createPalette"

// To add color partial to TS
// Refer: https://stackoverflow.com/a/61120868
declare module "@material-ui/core/styles/createPalette" {
  interface PaletteColor extends ColorPartial {}
}

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
