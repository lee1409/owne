import { Box } from "@material-ui/core"
import { IconButton } from "../../components/Button"
import HeaderContainer from "./HeaderContainer"
import { useContext } from "react"
import { ModalContext } from "../../contexts/ModalContext"

export const FoodMobileHeader = () => {
  const { showModal } = useContext(ModalContext)

  return (
    <HeaderContainer>
      <Box flexGrow={1}>
        <IconButton icon="ArrowLeft" edge="start" />
      </Box>
      <Box>
        <IconButton
          icon="CircleEditOutline"
          edge="end"
          onClick={() => showModal("foodScreenMenuModal")}
        />
      </Box>
    </HeaderContainer>
  )
}
