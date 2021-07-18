import { AppBar, Toolbar, CssBaseline, Avatar } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import { HeaderTitle, HeaderLogo } from "../Typography"
import { IconButton } from "../Button"
import SearchBar from "../SearchBar"
import HeaderNavList from "../HeaderNavList"
import { useMediaQueryUp } from "../../utils/hook"

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  margin: theme.spacing(5, 10),
}))

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
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
      <>
        <CssBaseline />
        <StyledAppBar elevation={0}>
          <StyledToolBar disableGutters>
            <HeaderLogo />
            <StyledHeaderNavList />
            <StyledSearchBar />
            <Avatar alt="Test User" />
          </StyledToolBar>
        </StyledAppBar>
      </>
    )
  }

  return (
    <>
      <CssBaseline />
      <StyledAppBar elevation={0}>
        <StyledToolBar disableGutters>
          <StyledHeaderTitle label="Menu" />
          <IconButton icon="search" />
          <IconButton icon="add" />
        </StyledToolBar>
      </StyledAppBar>
    </>
  )
}

export default Header
