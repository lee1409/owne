import { FC } from "react"
import { ButtonBase, ButtonBaseProps } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import Icon from "../Icon"
import { LocationName } from "../Typography"

const StyledLocationName = styled(LocationName)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}))

type LocationProps = {
  location: string
} & ButtonBaseProps

const Location: FC<LocationProps> = ({ ...props }) => {
  const { location } = props

  return (
    <ButtonBase {...props}>
      <Icon variant="Location" />
      <StyledLocationName>{location}</StyledLocationName>
    </ButtonBase>
  )
}

export default Location
