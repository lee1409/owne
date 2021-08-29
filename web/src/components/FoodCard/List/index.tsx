import { FC } from "react"
import { Container } from "@material-ui/core"
import { FoodCard } from ".."
import { GridContainer } from "../../Grid"
import { TagProps } from "../../Tag"

export type Food = {
  featured_image: string
  name: string
  description: string
  tags: TagProps[]
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
              src={item.featured_image}
              name={item.name}
              description={item.description}
              tags={item.tags}
            />
          </GridContainer>
        ))}
      </GridContainer>
    </Container>
  )
}

export default FoodCardList
