import { Button, ButtonProps } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"

import { HeaderNavLabel } from "../Typography"

const StyledHeaderNavButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  margin: `0 ${theme.spacing(3)}px`,
}))

type HeaderNavActionProps = {
  label: string
} & ButtonProps

const HeaderNavAction = ({ children, ...props }: HeaderNavActionProps) => {
  return (
    <StyledHeaderNavButton {...props}>
      <HeaderNavLabel>{props.label}</HeaderNavLabel>
    </StyledHeaderNavButton>
  )
}

export default HeaderNavAction
