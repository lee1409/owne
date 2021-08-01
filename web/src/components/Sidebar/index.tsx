import { Container } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import SidebarAction from "./SidebarAction"
import { useMediaQueryUp } from "../../utils/hook"

const StyledSidebarContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  minHeight: "90vh",
  position: "sticky",
  top: "100px",
  alignContent: "stretch",
})

const StyledSidebarAction = styled(SidebarAction)({
  margin: "25px 0",
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
      <StyledSidebarAction label="testtesttest" to="/#" />
      <StyledSidebarAction label="Dessert" to="/#" />
      <StyledSidebarAction label="test" to="/#" />
    </StyledSidebarContainer>
  )
}

export default Sidebar
