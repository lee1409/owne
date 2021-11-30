import { useState, useEffect } from "react"
import { BottomNavigation } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import { useLocation } from "react-router-dom"

import BottomNavigationAction from "./BottomNavigationAction"
import ROUTE_NAME from "../../router/routeName"
import { useMediaQueryUp } from "../../hooks/layout"

const StyledFooter = styled("footer")(() => ({
  width: "100vw",
  position: "fixed",
  bottom: 0,
}))

const BottomNavigationBar = () => {
  const [activeScreen, setActiveScreen] = useState("menu")
  const location = useLocation()
  const matchedLg = useMediaQueryUp("lg")

  useEffect(() => {
    const { pathname } = location
    const route = pathname.substring(pathname.lastIndexOf("/") + 1)
    setActiveScreen(route)
  }, [location])

  if (matchedLg) return null

  return (
    <StyledFooter>
      <BottomNavigation
        value={activeScreen}
        onChange={(event, screen) => setActiveScreen(screen)}
        showLabels
      >
        <BottomNavigationAction
          label="Explore"
          value="explore"
          route={ROUTE_NAME.EXPLORE}
        />
        <BottomNavigationAction
          label="Menu"
          value="menu"
          route={ROUTE_NAME.MENU}
        />
        <BottomNavigationAction
          label="Stories"
          value="stories"
          route={ROUTE_NAME.STORIES}
        />
        <BottomNavigationAction
          label="More"
          value="more"
          route={ROUTE_NAME.MORE}
        />
      </BottomNavigation>
    </StyledFooter>
  )
}

export default BottomNavigationBar
