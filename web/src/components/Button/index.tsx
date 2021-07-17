import {
  Button,
  IconButton,
  IconButtonProps,
  ButtonProps,
  makeStyles,
} from "@material-ui/core"
import { Search, AddCircleOutlineOutlined } from "@material-ui/icons"
import { HeaderNavLabel } from "../Typography"

const useStyles = makeStyles(() => ({
  headerNavButtonRoot: {
    textTransform: "none",
  },
}))

export const SearchButton = ({ ...props }: IconButtonProps) => (
  <IconButton {...props}>
    <Search />
  </IconButton>
)

export const AddButton = ({ ...props }: IconButtonProps) => (
  <IconButton {...props}>
    <AddCircleOutlineOutlined />
  </IconButton>
)

export const HeaderNavButton = ({ children, ...props }: ButtonProps) => {
  const classes = useStyles()
  return (
    <Button
      variant="text"
      disableRipple
      classes={{
        root: classes.headerNavButtonRoot,
      }}
      {...props}
    >
      <HeaderNavLabel>{children}</HeaderNavLabel>
    </Button>
  )
}
