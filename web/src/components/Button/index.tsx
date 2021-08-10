import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from "@material-ui/core"
import { styled } from "@material-ui/core/styles"

import Icon, { IconVariant } from "../Icon"

const StyledIconButtonContainer = styled(MuiIconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
}))

type IconButtonProps = {
  icon: IconVariant
} & MuiIconButtonProps

export const IconButton = (props: IconButtonProps) => {
  const { icon } = props
  return (
    <StyledIconButtonContainer {...props}>
      <Icon variant={icon} />
    </StyledIconButtonContainer>
  )
}
