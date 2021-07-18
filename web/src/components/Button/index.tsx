import {
  Button,
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
  ButtonProps,
} from "@material-ui/core"
import {
  Search,
  AddCircleOutlineOutlined,
  SvgIconComponent,
} from "@material-ui/icons"
import { styled } from "@material-ui/core/styles"
import { HeaderNavLabel } from "../Typography"

const StyledIconButtonContainer = styled(MuiIconButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
}))

type IconType = "search" | "add"

const icons: Record<IconType, SvgIconComponent> = {
  search: Search,
  add: AddCircleOutlineOutlined,
}

type IconButtonProps = {
  icon: IconType
} & MuiIconButtonProps

export const IconButton = (props: IconButtonProps) => {
  const { icon } = props
  const Icon = icons[icon]
  return (
    <StyledIconButtonContainer {...props}>
      <Icon />
    </StyledIconButtonContainer>
  )
}

const StyledHeaderNavButtonContainer = styled(Button)(() => ({
  textTransform: "none",
}))

type HeaderNavButtonProps = {
  label: RouteName
} & ButtonProps

export const HeaderNavButton = ({
  children,
  ...props
}: HeaderNavButtonProps) => {
  return (
    <StyledHeaderNavButtonContainer disableRipple {...props}>
      <HeaderNavLabel>{props.label}</HeaderNavLabel>
    </StyledHeaderNavButtonContainer>
  )
}
