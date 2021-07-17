import { FC } from "react"
import { InputBase, makeStyles, Theme, fade } from "@material-ui/core"
import { Search } from "@material-ui/icons"

const useStyles = makeStyles((theme: Theme) => ({
  search: {
    position: "relative",
    border: "1px solid black",
    borderRadius: 22,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.05),
    },
    width: "auto",
  },
  inputRoot: {
    color: theme.palette.secondary.main,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}))

export const SearchBar: FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <Search />
      </div>
      <InputBase
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        placeholder="Search"
      />
    </div>
  )
}
