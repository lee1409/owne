import { HeaderLogo } from "../../components/Typography"
import { Avatar, Box } from "@material-ui/core"
import SearchBar from "../../components/SearchBar"
import HeaderNavList from "../../components/HeaderNavList"
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
