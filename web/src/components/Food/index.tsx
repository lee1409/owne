import { Container } from "@material-ui/core"
import { useContext } from "react"

import FoodScreenMenuModal from "../../containers/FoodScreenMenuModal"
import { GridContainer } from "../Grid"
import Story from "../../containers/Story"
import { FoodTitle, SectionTitle, FoodDescription } from "../Typography"
import ImaageContainer from "./ImageContainer"
import RestaurantDetail from "./RestaurantDetail"
import { ModalContext } from "../../contexts/ModalContext"
import Icon from "../Icon"
import Tags from "./Tags"

const Food = () => {
  const { state } = useContext(ModalContext)
  return (
    <>
      <FoodScreenMenuModal open={state.foodScreenMenuModal} />
      <Container fixed>
        <GridContainer spacing={2} direction="column">
          <GridContainer item>
            <FoodTitle>Chicken Rice</FoodTitle>
          </GridContainer>
          <GridContainer item>
            <Story />
          </GridContainer>
          <GridContainer item>
            <SectionTitle>About this food 🍔</SectionTitle>
          </GridContainer>
          <GridContainer item>
            <ImaageContainer />
          </GridContainer>
          <GridContainer item>
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
          </GridContainer>
          <GridContainer item>
            <SectionTitle>
              #Foodtags&nbsp;
              <Icon variant="HashTag" />
            </SectionTitle>
          </GridContainer>
          <GridContainer item>
            <Tags />
          </GridContainer>
          <GridContainer item>
            <SectionTitle>Restaurent Details</SectionTitle>
          </GridContainer>
          <GridContainer item>
            <RestaurantDetail
              name="Ah Beng Chicken Rice"
              address="123, Jalan Abc 456, Indah 5, 45500, Kuala Lumpur"
              operatingHour="Operating hour: 12.00 a.m. - 6 p.m."
            />
          </GridContainer>
        </GridContainer>
      </Container>
    </>
  )
}

export default Food
