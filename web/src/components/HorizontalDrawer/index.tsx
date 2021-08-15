import { FC } from "react"
import { styled } from "@material-ui/core/styles"

type HorizontalDrawerProps = {
  spacing?: number
}

const Container = styled(({ spacing, ...other }: HorizontalDrawerProps) => (
  <div {...other} />
))({
  margin: "15px 0",
  "&>:not(:first-child):not(:last-child)": {
    marginLeft: (props: HorizontalDrawerProps) => props.spacing,
    marginRight: (props: HorizontalDrawerProps) => props.spacing,
  },
  "&>:last-child": {
    marginLeft: (props: HorizontalDrawerProps) => props.spacing,
  },
  "&>:first-child": {
    marginRight: (props: HorizontalDrawerProps) => props.spacing,
    marginLeft: 0,
  },
  // To allow horizontal scroll
  overflowX: "scroll",
  whiteSpace: "nowrap",
  // Hide scrollbar for Chrome, Safari and Opera
  "&::-webkit-scrollbar": {
    display: "none",
  },
  // Hide scrollbar for IE, Edge and Firefox
  msOverflowStyle: "none",
  scrollbarWidth: "none",
})

const HorizontalDrawer: FC<HorizontalDrawerProps> = ({
  children,
  spacing = 6,
}) => {
  return <Container spacing={spacing}>{children}</Container>
}

export default HorizontalDrawer
