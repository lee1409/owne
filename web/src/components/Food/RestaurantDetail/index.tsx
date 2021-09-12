import { Box } from "@material-ui/core"
import { FC } from "react"

import { IconButton } from "../../Button"
import { createName, createAddress, createOperatingHours } from "./utils"

type RestaurantDetailProps = {
  name: string
  address: string
  operatingHour: string
}

// TODO: location map redirection
const RestaurantDetail: FC<RestaurantDetailProps> = props => {
  const { name, address, operatingHour } = props

  const Name = createName(name)
  const Address = createAddress(address)
  const OperatingHour = createOperatingHours(operatingHour)

  return (
    <Box display="flex" flexGrow={1}>
      <Box flexGrow={1}>
        <Name />
        <Address />
        <OperatingHour />
      </Box>
      <Box>
        <IconButton icon="Direction" />
      </Box>
    </Box>
  )
}

export default RestaurantDetail
