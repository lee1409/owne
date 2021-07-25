import { Container } from "@material-ui/core"

import { FoodCard } from "../../components/FoodCard"
import { GridContainer } from "../../components/Grid"
import { SectionTitle } from "../../components/Typography"
import ChickenSoup from "../../assets/chicken_soup.jpg"
import Location from "../../components/Location"

const Menu = () => {
  return (
    <>
      <Container>
        <GridContainer spacing={2}>
          <GridContainer item xs={12}>
            <Location location="ABC Restaurant" />
          </GridContainer>
          <GridContainer item xs={12}>
            <SectionTitle>Guess you would like</SectionTitle>
          </GridContainer>
          <GridContainer
            item
            xs={6}
            sm={3}
            justify="center"
            alignItems="center"
          >
            <FoodCard src={ChickenSoup} name="Chicken Soup" />
          </GridContainer>
        </GridContainer>
      </Container>
      <Container>
        <GridContainer spacing={2}>
          <GridContainer item xs={12} md={6} lg={4}>
            <FoodCard
              src={ChickenSoup}
              name="Chicken Soup"
              description="Adipisicing proident laborum ea in culpa cillum non excepteur voluptate consequat."
              tags={[
                {
                  label: "average",
                  count: 5,
                },
                {
                  label: "average",
                  count: 5,
                },
              ]}
            />
          </GridContainer>
          <GridContainer item xs={12} md={6} lg={4}>
            <FoodCard
              src={ChickenSoup}
              name="Chicken Soup"
              description="Adipisicing proident laborum ea in culpa cillum non excepteur voluptate consequat."
              tags={[
                {
                  label: "average",
                  count: 5,
                },
                {
                  label: "average",
                  count: 5,
                },
              ]}
            />
          </GridContainer>
          <GridContainer item xs={12} md={6} lg={4}>
            <FoodCard
              src={ChickenSoup}
              name="Chicken Soup"
              description="Adipisicing proident laborum ea in culpa cillum non excepteur voluptate consequat."
              tags={[
                {
                  label: "average",
                  count: 5,
                },
                {
                  label: "average",
                  count: 5,
                },
              ]}
            />
          </GridContainer>
        </GridContainer>
      </Container>
    </>
  )
}

export default Menu
