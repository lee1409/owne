import { FC } from "react"
import { Card, CardMedia } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import { FoodName, FoodDescription } from "../Typography"
import Tag, { TagProps } from "../Tag"

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
  src?: string
  name: string
  description?: string
  tags?: Array<TagProps>
}

export const FoodCard: FC<FoodCardProps> = props => {
  const { src, name, description, tags = [] } = props

  return (
    <FoodCardWrapper>
      <Card elevation={4}>
        <StyledCardMedia image={src} title="ChickenSoup" />
      </Card>
      <StyledFoodName>{name}</StyledFoodName>
      <FoodDescription>{description}</FoodDescription>
      {tags.map(tag => (
        <Tag label={tag.label} count={tag.count} />
      ))}
    </FoodCardWrapper>
  )
}
