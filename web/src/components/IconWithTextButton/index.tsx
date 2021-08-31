import { ButtonBase, Typography, ButtonBaseProps } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"

import Icon, { IconVariant } from "../Icon"

const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: 12,
}))

const IconWithTextButtonLabel = styled(Typography)({
  marginLeft: "30px",
})

type IconWithTextButtonProps = {
  icon: IconVariant
  label?: string
} & ButtonBaseProps

const IconWithTextButton = (props: IconWithTextButtonProps) => {
  const { icon, label } = props
  return (
    <StyledButtonBase {...props}>
      <Icon variant={icon} />
      <IconWithTextButtonLabel>{label}</IconWithTextButtonLabel>
    </StyledButtonBase>
  )
}

export default IconWithTextButton
