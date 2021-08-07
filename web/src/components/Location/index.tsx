import { FC } from "react"
import { ButtonBase, ButtonBaseProps } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import Icon from "../Icon"
import { LocationName } from "../Typography"

const StyledLocationName = styled(LocationName)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}))

const StyledIcon = styled(Icon)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    width: "3rem",
    height: "3rem",
  },
}))

type LocationProps = {
  location: string
} & ButtonBaseProps

const Location: FC<LocationProps> = ({ ...props }) => {
  const { location } = props

  return (
    <ButtonBase {...props}>
      <StyledIcon variant="Location" />
      <StyledLocationName>{location}</StyledLocationName>
    </ButtonBase>
  )
}

export default Location
