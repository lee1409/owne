import { Box } from "@material-ui/core"
import { FC } from "react"

import { IconButton } from "../../components/Button"

import {
  RestaurantDetailAddress,
  RestaurantDetailName,
  ResturantDetailOperatingHour,
} from "../../components/Typography"

type RestaurantDetailProps = {
  name: string
  address: string
  operatingHour: string
}

// TODO: location map redirection
const RestaurantDetail: FC<RestaurantDetailProps> = props => {
  const { name, address, operatingHour } = props
  return (
    <Box display="flex" flexGrow={1}>
      <Box flexGrow={1}>
        <RestaurantDetailName>{name}</RestaurantDetailName>
        <RestaurantDetailAddress>{address}</RestaurantDetailAddress>
        <ResturantDetailOperatingHour>
          {operatingHour}
        </ResturantDetailOperatingHour>
      </Box>
      <Box>
        <IconButton icon="Direction" />
      </Box>
    </Box>
  )
}

export default RestaurantDetail
