import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  Theme,
  Avatar,
} from "@material-ui/core"
import { HeaderTitle, HeaderLogo } from "../Typography"
import { SearchButton, AddButton, HeaderNavButton } from "../Button"
import { SearchBar } from "../Input"
import { useMediaQueryUp } from "../../utils/hook"

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  toolBarRoot: {
    margin: theme.spacing(5, 10),
  },
  title: {
    flexGrow: 1,
  },
  iconButton: {
    color: theme.palette.secondary.main,
  },
  navigationBar: {
    flexGrow: 1,
    padding: theme.spacing(0, 7),
    "& button": {
      marginLeft: theme.spacing(3),
    },
  },
  searchBar: {
    marginRight: theme.spacing(10),
  },
}))

const Header = () => {
  const classes = useStyles()
  const matchedLg = useMediaQueryUp("lg")

  if (matchedLg) {
    return (
      <>
        <CssBaseline />
        <AppBar className={classes.appBar} elevation={0}>
          <Toolbar
            classes={{
              root: classes.toolBarRoot,
            }}
            disableGutters
          >
            <HeaderLogo>Owne</HeaderLogo>
            <div className={classes.navigationBar}>
              <HeaderNavButton>Explore</HeaderNavButton>
              <HeaderNavButton>Menu</HeaderNavButton>
              <HeaderNavButton>Stories</HeaderNavButton>
            </div>
            <div className={classes.searchBar}>
              <SearchBar />
            </div>
            <Avatar alt="Test User" />
          </Toolbar>
        </AppBar>
      </>
    )
  }

  return (
    <>
      <CssBaseline />
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar
          classes={{
            root: classes.toolBarRoot,
          }}
          disableGutters
        >
          <div className={classes.title}>
            <HeaderTitle>Menu</HeaderTitle>
          </div>
          <SearchButton className={classes.iconButton} />
          <AddButton edge="end" className={classes.iconButton} />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
