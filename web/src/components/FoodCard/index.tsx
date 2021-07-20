import { FC } from "react"
import { Card, CardMedia } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import { FoodName } from "../Typography"

const FoodCardWrapper = styled("div")(() => ({
  width: "inherit",
  height: "100%",
  minWidth: "130px",
}))

const StyledCardMedia = styled(CardMedia)(() => ({
  paddingTop: "60%",
}))

const StyledFoodName = styled(FoodName)(() => ({
  marginTop: "10px",
}))

type FoodCardProps = {
  src: string
  name: string
}

export const FoodCard: FC<FoodCardProps> = props => {
  const { src, name } = props

  return (
    <FoodCardWrapper>
      <Card>
        <StyledCardMedia image={src} title="ChickenSoup" />
      </Card>
      <StyledFoodName>{name}</StyledFoodName>
    </FoodCardWrapper>
  )
}
