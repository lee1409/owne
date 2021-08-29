import { Container } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import SidebarAction from "./SidebarAction"
import { useMediaQueryUp } from "../../utils/hook"

const StyledSidebarContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  position: "sticky",
  top: "100px",
  paddingTop: "100px",
  width: "200px",
})

const StyledSidebarAction = styled(SidebarAction)({
  margin: "25px 0",
  direction: "rtl",
})

const Sidebar = () => {
  const matchedLg = useMediaQueryUp("lg")

  if (!matchedLg) {
    return null
  }

  return (
    <StyledSidebarContainer fixed>
      <StyledSidebarAction label="test" to="/#" />
      <StyledSidebarAction label="Main Dishes" to="/#" />
      <StyledSidebarAction label="A suuuuuuuuuuuuuuupeeerrr long one" to="/#" />
      <StyledSidebarAction label="Dessert" to="/#" />
      <StyledSidebarAction label="test" to="/#" />
    </StyledSidebarContainer>
  )
}

export default Sidebar
