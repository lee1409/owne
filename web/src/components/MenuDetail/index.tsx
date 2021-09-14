import { Container } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"

import { FoodCard } from "../FoodCard"
import { GridContainer } from "../Grid"
import { SectionTitle } from "../Typography"
import ChickenSoup from "../../assets/chicken_soup.jpg"
import Location from "../Location"
import MenuTabNavBar from "./TabNavBar"
import FoodCardList, { Food } from "../FoodCard/List"
import { FC } from "react"
import Sidebar from "../Sidebar/index"

interface IMenuProps {
  matchedLg: boolean
  location: string
  foods?: Food[]
  categories: string[]
}

const LocationContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    marginTop: "3rem",
    marginBottom: "4rem",
  },
}))

const MenuDetail: FC<IMenuProps> = ({
  matchedLg,
  location,
  foods = [],
  categories = [],
}) => {
  return (
    <>
      <GridContainer item lg={3} xs={12}>
        <Sidebar matchedLg={matchedLg} categories={categories} />
      </GridContainer>
      <GridContainer item lg={9} xs={12}>
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

        <FoodCardList list={foods} />
      </GridContainer>
    </>
  )
}

export default MenuDetail
