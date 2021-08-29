import { Container } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"

import { FoodCard } from "../FoodCard"
import { GridContainer } from "../Grid"
import { SectionTitle } from "../Typography"
import ChickenSoup from "../../assets/chicken_soup.jpg"
import Location from "../Location"
import MenuTabNavBar from "../MenuTabNavBar"
import FoodCardList, { Food } from "../FoodCard/List"
import { FC } from "react"

interface IMenuProps {
  matchedLg: boolean
  list: Food[]
  location: string
}

const LocationContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    marginTop: "3rem",
    marginBottom: "4rem",
  },
}))

const Menu: FC<IMenuProps> = ({ matchedLg, list, location }) => {
  return (
    <>
      <LocationContainer fixed>
        <GridContainer spacing={2}>
          <GridContainer item xs={12}>
            <Location location={location} />
          </GridContainer>
        </GridContainer>
      </LocationContainer>

      {!matchedLg && (
        <>
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
          <MenuTabNavBar />
        </>
      )}
      <FoodCardList list={list} />
    </>
  )
}

export default Menu
