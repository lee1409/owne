import { Container, Box, Typography } from "@material-ui/core"

import {
  FoodTitle,
  SectionTitle,
  FoodDescription,
} from "../../components/Typography"
import { GridContainer } from "../../components/Grid"
import ImageCard from "../../components/ImageCard"
import HorizontalDrawer from "../../components/HorizontalDrawer"
import Tag from "../../components/Tag"
import Icon from "../../components/Icon"
import { IconButton } from "../../components/Button"

import Story from "../../containers/Story"

import ChickenRiceImg from "../../assets/chicken_rice.jpg"

const FoodScreen = () => {
  return (
    <>
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
            <HorizontalDrawer>
              {/* TODO: load API data here */}
              <ImageCard src={ChickenRiceImg} alt="chicken rice" />
              <ImageCard src={ChickenRiceImg} alt="chicken rice" />
            </HorizontalDrawer>
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
            {/* TODO: load from API */}
            <Tag label="Test" count={1} />
            <Tag label="TestTest" count={1} />
            <Tag label="TestTest" count={1} />
            <Tag label="TestTest" count={1} />
            <Tag label="TestTest" count={1} />
          </GridContainer>
          <GridContainer item>
            <SectionTitle>Restaurent Details</SectionTitle>
          </GridContainer>
          <GridContainer item>
            <GridContainer item xs={10}>
              <Typography component="div">
                <Box fontWeight="fontWeightRegular">Ah Beng Chicken Rice</Box>
                <Box fontWeight="fontWeightRegular">
                  123, Jalan Abc 456, Indah 5, 45500, Kuala Lumpur
                </Box>
                <Box fontWeight="fontWeightLight">
                  Operating hour: 12.00 a.m. - 6 p.m.
                </Box>
              </Typography>
            </GridContainer>
            <GridContainer item xs={2} justify="center" alignItems="center">
              <IconButton icon="Direction" />
            </GridContainer>
          </GridContainer>
        </GridContainer>
      </Container>
    </>
  )
}

export default FoodScreen
