import { Container } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import SidebarAction from "./SidebarAction"
import { FC } from "react"

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

interface ISidebarProps {
  matchedLg: boolean
  categories: string[]
}

const Sidebar: FC<ISidebarProps> = ({ matchedLg, categories }) => {
  if (!matchedLg) {
    return null
  }
  
  return (
    <StyledSidebarContainer fixed>
      {categories.map(category => (
        <StyledSidebarAction
          label={category}
          to={"#" + category}
          key={category}
        />
      ))}
    </StyledSidebarContainer>
  )
}

export default Sidebar
