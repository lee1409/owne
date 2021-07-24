import {
  Button,
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
  ButtonProps,
} from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import { HeaderNavLabel } from "../Typography"
import Icon from "../Icon"

const StyledIconButtonContainer = styled(MuiIconButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
}))

type IconType = "Search" | "AddCircle"

type IconButtonProps = {
  icon: IconType
} & MuiIconButtonProps

export const IconButton = (props: IconButtonProps) => {
  const { icon } = props
  return (
    <StyledIconButtonContainer {...props}>
      <Icon variant={icon} />
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
