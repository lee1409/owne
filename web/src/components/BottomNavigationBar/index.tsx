import { useState } from "react"
import { BottomNavigation } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"

import BottomNavigationAction from "./BottomNavigationAction"
import { Footer } from "../Layout"

const StyledFooter = styled(Footer)(() => ({
  width: "100vw",
  position: "fixed",
  bottom: 0,
}))

const BottomNavigationBar = () => {
  const [activeScreen, setActiveScreen] = useState("Menu")
  return (
    <StyledFooter>
      <BottomNavigation
        value={activeScreen}
        onChange={(event, screen) => setActiveScreen(screen)}
        showLabels
      >
        <BottomNavigationAction label="Explore" />
        <BottomNavigationAction label="Menu" />
        <BottomNavigationAction label="Stories" />
        <BottomNavigationAction label="More" />
      </BottomNavigation>
    </StyledFooter>
  )
}

export default BottomNavigationBar
