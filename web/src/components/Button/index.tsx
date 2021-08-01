import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from "@material-ui/core"
import { styled } from "@material-ui/core/styles"

import Icon from "../Icon"

const StyledIconButtonContainer = styled(MuiIconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
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
