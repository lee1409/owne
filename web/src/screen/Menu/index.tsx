import { Container } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"

import { FoodCard } from "../../components/FoodCard"
import { GridContainer } from "../../components/Grid"
import { SectionTitle } from "../../components/Typography"
import ChickenSoup from "../../assets/chicken_soup.jpg"
import Location from "../../components/Location"
import { useMediaQueryUp } from "../../utils/hook"

const LocationContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    marginTop: "3rem",
    marginBottom: "4rem",
  },
}))

const Menu = () => {
  const matchedLg = useMediaQueryUp("lg")

  return (
    <>
      <LocationContainer fixed>
        <GridContainer spacing={2}>
          <GridContainer item xs={12}>
            <Location location="ABC Restaurant" />
          </GridContainer>
        </GridContainer>
      </LocationContainer>

      {!matchedLg && (
        <Container fixed>
          <GridContainer spacing={2}>
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
      )}

      <Container fixed>
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
