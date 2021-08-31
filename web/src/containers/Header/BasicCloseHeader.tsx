import { Box } from "@material-ui/core"
import HeaderContainer from "./HeaderContainer"
import { IconButton } from "../../components/Button"
import { FC } from "react"

type BasicCloseHeaderProps = {
  onClose: () => null
}

const BasicCloseHeader: FC<BasicCloseHeaderProps> = props => (
  <HeaderContainer>
    <Box>
      <IconButton icon="Close" edge="start" onClick={props.onClose} />
    </Box>
  </HeaderContainer>
)

export default BasicCloseHeader
