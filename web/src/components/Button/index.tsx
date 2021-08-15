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

const RoundedImage = styled("img")({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  border: "2px solid black",
  objectFit: "cover",
})

type StoryButtonProps = {
  src: string
  alt: string
  onClick?: React.MouseEventHandler<HTMLImageElement> // TBC
}

export const StoryButton = (props: StoryButtonProps) => {
  return <RoundedImage {...props} />
}
