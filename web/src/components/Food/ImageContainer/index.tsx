import { Box } from "@material-ui/core"
import HorizontalDrawer from "../../HorizontalDrawer"
import { useIsMobile } from "../../../hooks/layout"
import { createImage } from "./utils"

import ChickenRiceImg from "../../../assets/chicken_rice.jpg"

const dummyData = [1, 2, 3, 4, 5]

const FoodImages = () => {
  const isMobile = useIsMobile()
  const Image = createImage(isMobile)

  if (isMobile)
    return (
      <HorizontalDrawer>
        {dummyData.map(() => (
          <Image src={ChickenRiceImg} alt="chicken rice" />
        ))}
      </HorizontalDrawer>
    )

  return (
    <Box flexDirection="column">
      {dummyData.map(() => (
        <Box paddingBottom="45px">
          <Image src={ChickenRiceImg} alt="chicken rice" />
        </Box>
      ))}
    </Box>
  )
}

export default FoodImages
