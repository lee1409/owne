import { Toolbar, Avatar, AppBar } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import { HeaderTitle, HeaderLogo } from "../Typography"
import { IconButton } from "../Button"
import SearchBar from "../SearchBar"
import HeaderNavList from "../HeaderNavList"
import { useMediaQueryUp } from "../../utils/hook"

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  margin: theme.spacing(2, 4, 0, 4),
  height: "100%",
  [theme.breakpoints.up("lg")]: {
    margin: theme.spacing(2, 10, 0, 10),
  },
}))

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: "100px",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.main,
}))

const StyledHeaderNavList = styled(HeaderNavList)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(0, 7),
  "& button": {
    marginLeft: theme.spacing(3),
  },
}))

const StyledSearchBar = styled(SearchBar)(({ theme }) => ({
  marginRight: theme.spacing(10),
}))

const StyledHeaderTitle = styled(HeaderTitle)(() => ({
  flexGrow: 1,
}))

const Header = () => {
  const matchedLg = useMediaQueryUp("lg")

  if (matchedLg) {
    return (
      <StyledAppBar elevation={0} position="sticky">
        <StyledToolBar disableGutters>
          <HeaderLogo />
          <StyledHeaderNavList />
          <StyledSearchBar />
          <Avatar alt="Test User" />
        </StyledToolBar>
      </StyledAppBar>
    )
  }

  return (
    <StyledAppBar elevation={0} position="sticky">
      <StyledToolBar disableGutters>
        <StyledHeaderTitle label="Menu" />
        <IconButton icon="Search" />
        <IconButton icon="AddCircle" edge="end" />
      </StyledToolBar>
    </StyledAppBar>
  )
}

export default Header
