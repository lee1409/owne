import { Box } from "@material-ui/core"
import { IconButton } from "../Button"
import HeaderContainer from "./HeaderContainer"

export const FoodMobileHeader = () => {
  return (
    <HeaderContainer>
      <Box flexGrow={1}>
        <IconButton icon="ArrowLeft" edge="start" />
      </Box>
      <Box>
        <IconButton icon="CircleEditOutline" edge="end" />
      </Box>
    </HeaderContainer>
  )
}
