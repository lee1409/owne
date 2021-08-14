import { Container } from "@material-ui/core"

import { FoodTitle } from "../../components/Typography"

import Story from "../../containers/Story"

const FoodScreen = () => {
  return (
    <>
      <Container fixed>
        <FoodTitle>Chicken Rice</FoodTitle>
      </Container>

      <Container fixed>
        <Story />
      </Container>
    </>
  )
}

export default FoodScreen
