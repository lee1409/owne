import { Typography } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"

const RestaurantName = styled(Typography)({
  fontSize: "0.75rem",
})

export const createName = (text: string) => () =>
  <RestaurantName>{text}</RestaurantName>

const RestaurantAddress = styled(Typography)({
  fontSize: "0.75rem",
})

export const createAddress = (text: string) => () => {
  return <RestaurantAddress>{text}</RestaurantAddress>
}

const ResturantOperatingHour = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  fontWeight: theme.typography.fontWeightLight,
}))

export const createOperatingHours = (text: string) => () => {
  return <ResturantOperatingHour>{text}</ResturantOperatingHour>
}
