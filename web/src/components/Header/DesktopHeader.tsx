import { HeaderLogo } from "../Typography"
import { Avatar, Box } from "@material-ui/core"
import SearchBar from "../SearchBar"
import HeaderNavList from "../HeaderNavList"
import HeaderContainer from "./HeaderContainer"

const DesktopHeader = () => (
  <HeaderContainer>
    <Box>
      <HeaderLogo />
    </Box>
    <Box ml={10} flexGrow={1}>
      <HeaderNavList />
    </Box>
    <Box mr={10}>
      <SearchBar />
    </Box>
    <Box>
      <Avatar />
    </Box>
  </HeaderContainer>
)

export default DesktopHeader
