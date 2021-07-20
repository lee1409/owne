import { Container } from "@material-ui/core"

import Header from "../../components/Header"
import BottomNavigationBar from "../../components/BottomNavigationBar"
import { FoodCard } from "../../components/FoodCard"
import { GridContainer } from "../../components/Grid"
import { SectionTitle } from "../../components/Typography"
import ChickenSoup from "../../assets/chicken_soup.jpg"

const Menu = () => {
  return (
    <>
      <Header />
      <Container>
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
      <BottomNavigationBar />
    </>
  )
}

export default Menu
