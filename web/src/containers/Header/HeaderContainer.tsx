import { FC } from "react"
import { Toolbar, AppBar } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: "100px",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.main,
}))

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  margin: theme.spacing(2, 4, 0, 4),
  height: "100%",
  [theme.breakpoints.up("lg")]: {
    margin: theme.spacing(2, 10, 0, 10),
  },
}))

const HeaderContainer: FC = props => {
  return (
    <StyledAppBar elevation={0} position="sticky">
      <StyledToolBar disableGutters>{props.children}</StyledToolBar>
    </StyledAppBar>
  )
}

export default HeaderContainer
