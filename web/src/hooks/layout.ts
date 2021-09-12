import { useTheme, useMediaQuery as useMuiMediaQuery } from "@material-ui/core"
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints"

export const useMediaQueryUp = (breakpoints: Breakpoint | number) => {
  const theme = useTheme()
  const bpUp = theme.breakpoints.up(breakpoints)
  const matches = useMuiMediaQuery(bpUp)
  return matches
}

export const useIsMobile = () => {
  return !useMediaQueryUp("lg")
}
