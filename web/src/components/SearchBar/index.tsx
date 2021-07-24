import { FC } from "react"
import { InputBase, makeStyles, Theme, fade } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import clsx from "clsx"
import Icon from "../Icon"

const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid black",
  borderRadius: 22,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: fade(theme.palette.common.black, 0.05),
  },
  width: "auto",
}))

const SearchIconContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const useStyles = makeStyles((theme: Theme) => ({
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
}))

type SearchBarProps = {
  className?: string
}

const SearchBar: FC<SearchBarProps> = ({ className }) => {
  const containerClassName = clsx(className)
  const classes = useStyles()
  return (
    <SearchContainer className={containerClassName}>
      <SearchIconContainer>
        <Icon variant="Search" />
      </SearchIconContainer>
      <InputBase
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        placeholder="Search"
      />
    </SearchContainer>
  )
}

export default SearchBar
