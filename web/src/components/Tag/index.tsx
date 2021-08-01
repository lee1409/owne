import { styled } from "@material-ui/core/styles"
import { FC, CSSProperties } from "react"

function getRandomColor() {
  const colors = []
  for (var i = 0; i < 3; i++) {
    colors.push(Math.floor(Math.random() * 256))
  }
  const rgba = `rgba(${colors.join(",")},0.4)`
  return rgba
}

const TagContainer = styled("span")({
  borderRadius: "15px",
  padding: "3px 10px",
  margin: "10px 10px 0 0",
  display: "inline-block",
})

export type TagProps = {
  label: string
  count: number
}

const Tag: FC<TagProps> = props => {
  const { label, count } = props
  const containerStyle: CSSProperties = {
    background: getRandomColor(),
  }
  return (
    <TagContainer style={containerStyle}>
      {label} +{count}
    </TagContainer>
  )
}

export default Tag
