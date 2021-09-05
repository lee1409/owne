import { FC } from "react"
import { Container } from "@material-ui/core"
import { FoodCard } from ".."
import { GridContainer } from "../../Grid"

export type Food = {
  featured_image?: {
    url: string
  }
  name: string
  description: string
}

type Prop = {
  list: Food[]
}


const FoodCardList: FC<Prop> = (props) => {
  const { list } = props

  return (
    <Container fixed>
      <GridContainer spacing={2}>
        {list.map(item => (
          <GridContainer item xs={12} md={6} lg={4}>
            <FoodCard
              src={item.featured_image?.url}
              name={item.name}
              description={item.description}
            />
          </GridContainer>
        ))}
      </GridContainer>
    </Container>
  )
}

export default FoodCardList
