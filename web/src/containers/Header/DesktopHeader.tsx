import { HeaderLogo } from "../../components/Typography"
import { Avatar, Box } from "@material-ui/core"
import HeaderNavList from "../../components/HeaderNavList"
import HeaderContainer from "./HeaderContainer"
import { Autocomplete } from "../../components/Autocomplete/index"

const DesktopHeader = () => (
  <HeaderContainer>
    <Box>
      <HeaderLogo />
    </Box>
    <Box ml={10} flexGrow={1}>
      <HeaderNavList />
    </Box>
    <Box mr={10}>
      <Autocomplete />
    </Box>
    <Box>
      <Avatar />
    </Box>
  </HeaderContainer>
)

export default DesktopHeader
