import { styled } from "@material-ui/core/styles"
import MuiLayout, {
  getHeader,
  getContent,
  getFooter,
} from "@mui-treasury/layout"

export const scheme = MuiLayout()

scheme.configureHeader(builder => {
  builder.registerConfig("xs", {
    position: "sticky",
    initialHeight: "100px",
  })
})

export const Head = getHeader(styled)

export const Content = getContent(styled)

export const Footer = getFooter(styled)
