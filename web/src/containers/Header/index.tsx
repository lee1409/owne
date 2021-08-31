import { useLocation } from "react-router"
import DesktopHeader from "./DesktopHeader"
import { FoodMobileHeader } from "./FoodHeader"
import { MenuMobileHeader } from "./MenuHeader"
import ROUTE_NAME from "../../Router/routeName"
import { useMediaQueryUp } from "../../utils/hook"
import { getSegment } from "../../utils/urlHelper"

const Header = () => {
  const matchedDesktop = useMediaQueryUp("lg")
  const location = useLocation()

  // Desktop Header
  if (matchedDesktop) {
    return <DesktopHeader />
  }

  // Mobile headers
  switch (getSegment(location.pathname, 1)) {
    case ROUTE_NAME.FOOD:
      return <FoodMobileHeader />
    case ROUTE_NAME.MENU:
      return <MenuMobileHeader />
    default:
      return null
  }
}

export default Header
