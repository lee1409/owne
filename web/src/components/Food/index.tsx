import { Container, Box } from "@material-ui/core"
import { useContext } from "react"

import FoodScreenMenuModal from "../../containers/FoodScreenMenuModal"
import Story from "../../containers/Story"
import { FoodTitle, SectionTitle, FoodDescription } from "../Typography"
import ImageContainer from "./ImageContainer"
import RestaurantDetail from "./RestaurantDetail"
import { ModalContext } from "../../contexts/ModalContext"
import Icon from "../Icon"
import Tags from "./Tags"
import { useIsMobile } from "../../hooks/layout"
import Sidebar from "../Sidebar"
import { IconButton } from "../Button"

const Food = () => {
  const isMobile = useIsMobile()
  const { state } = useContext(ModalContext)

  if (isMobile)
    return (
      <>
        <FoodScreenMenuModal open={state.foodScreenMenuModal} />
        <Box width="100%">
          <Box>
            <FoodTitle>Chicken Rice</FoodTitle>
          </Box>
          <Box>
            <Story />
          </Box>
          <Box>
            <SectionTitle>About this food 🍔</SectionTitle>
          </Box>
          <Box>
            <ImageContainer />
          </Box>
          <Box marginBottom="30px">
            {/* TODO: load from API */}
            <FoodDescription>
              Irure aute dolore aliquip officia pariatur non ipsum aliquip
              ullamco officia. Tempor enim occaecat sit pariatur labore ea ea
              anim ad minim sit. Consectetur ea quis laborum eiusmod quis nulla
              duis dolor quis nisi enim. Excepteur in ea anim laboris.
              Incididunt minim labore nisi cupidatat irure reprehenderit non
              reprehenderit non et ex voluptate nisi eu. Proident ad est ex elit
              quis laborum velit minim exercitation ut. Consequat in fugiat
              occaecat consequat ut proident reprehenderit sit elit pariatur id.
            </FoodDescription>
          </Box>
          <Box marginBottom="20px">
            <SectionTitle>
              #Foodtags&nbsp;
              <Icon variant="HashTag" />
            </SectionTitle>
          </Box>
          <Box marginBottom="30px">
            <Tags />
          </Box>
          <Box marginBottom="20px">
            <SectionTitle>Restaurant Details</SectionTitle>
          </Box>
          <Box>
            <RestaurantDetail
              name="Ah Beng Chicken Rice"
              address="123, Jalan Abc 456, Indah 5, 45500, Kuala Lumpur"
              operatingHour="Operating hour: 12.00 a.m. - 6 p.m."
            />
          </Box>
        </Box>
      </>
    )

  return (
    <Container fixed maxWidth="lg">
      <Box display="flex" justifyContent="space-between">
        <Box
          maxWidth="320px"
          position="sticky"
          top="100px"
          alignSelf="flex-start"
        >
          <Sidebar matchedLg categories={["Photos", "Stories", "Related"]} />
        </Box>
        <Box
          display="flex"
          maxWidth="600px"
          marginLeft="110px"
          marginRight="50px"
          flexDirection="column"
        >
          <Box
            marginBottom="20px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <FoodTitle>Chicken Rice</FoodTitle>
            <IconButton icon="CircleEditOutline" />
          </Box>
          <ImageContainer />
        </Box>
        <Box
          maxWidth="320px"
          position="sticky"
          top="150px"
          alignSelf="flex-start"
        >
          <Box marginBottom="20px">
            <SectionTitle>About this food 🍔</SectionTitle>
          </Box>
          <Box marginBottom="60px">
            <FoodDescription>
              Irure aute dolore aliquip officia pariatur non ipsum aliquip
              ullamco officia. Tempor enim occaecat sit pariatur labore ea ea
              anim ad minim sit. Consectetur ea quis laborum eiusmod quis nulla
              duis dolor quis nisi enim. Excepteur in ea anim laboris.
              Incididunt minim labore nisi cupidatat irure reprehenderit non
              reprehenderit non et ex voluptate nisi eu. Proident ad est ex elit
              quis laborum velit minim exercitation ut. Consequat in fugiat
              occaecat consequat ut proident reprehenderit sit elit pariatur id.
            </FoodDescription>
          </Box>
          <Box marginBottom="20px">
            <SectionTitle>
              #Foodtags&nbsp;
              <Icon variant="HashTag" />
            </SectionTitle>
          </Box>
          <Box marginBottom="60px">
            <Tags />
          </Box>
          <Box marginBottom="20px">
            <SectionTitle>Restaurant Details</SectionTitle>
          </Box>
          <Box>
            <RestaurantDetail
              name="Ah Beng Chicken Rice"
              address="123, Jalan Abc 456, Indah 5, 45500, Kuala Lumpur"
              operatingHour="Operating hour: 12.00 a.m. - 6 p.m."
            />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Food
