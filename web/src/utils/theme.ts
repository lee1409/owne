import { createTheme } from "@material-ui/core/styles"
import { ColorPartial } from "@material-ui/core/styles/createPalette"

// Import font specifications separately to reduce bundle size
import "@fontsource/roboto/100.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

// To add color partial to TS
// Refer: https://stackoverflow.com/a/61120868
declare module "@material-ui/core/styles/createPalette" {
  interface PaletteColor extends ColorPartial {}
}

const theme = createTheme({
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
