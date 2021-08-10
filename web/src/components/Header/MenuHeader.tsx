import { Box } from "@material-ui/core"
import { IconButton } from "../Button"
import { HeaderTitle } from "../Typography"
import HeaderContainer from "./HeaderContainer"

export const MenuMobileHeader = () => {
  return (
    <HeaderContainer>
      <Box flexGrow={1}>
        <HeaderTitle>Menu</HeaderTitle>
      </Box>
      <Box>
        <IconButton icon="Search" />
        <IconButton icon="AddCircle" edge="end" />
      </Box>
    </HeaderContainer>
  )
}
