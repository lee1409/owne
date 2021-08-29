import { Box } from "@material-ui/core"
import HeaderContainer from "./HeaderContainer"
import { IconButton } from "../Button"

const BasicCloseHeader = () => (
  <HeaderContainer>
    <Box>
      <IconButton icon="Close" edge="start" />
    </Box>
  </HeaderContainer>
)

export default BasicCloseHeader
