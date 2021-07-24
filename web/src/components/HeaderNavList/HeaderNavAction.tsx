import { useEffect, useState } from "react"
import { Button, ButtonProps } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import { useLocation, useHistory } from "react-router-dom"

import { HeaderNavLabel } from "../Typography"

const StyledHeaderNavButton = styled(Button)(() => ({
  textTransform: "none",
}))

type HeaderNavActionProps = {
  label: RouteName
  route: string
} & ButtonProps

const HeaderNavAction = ({ children, ...props }: HeaderNavActionProps) => {
  const { route } = props
  const location = useLocation()
  const [currentRoute, setCurrentRoute] = useState("")

  const history = useHistory()

  useEffect(() => {
    const { pathname } = location
    setCurrentRoute(pathname)
  }, [location])

  const navigateTo = (route: string) => {
    history.push(route)
  }

  return (
    <StyledHeaderNavButton
      {...props}
      color={currentRoute === route ? "primary" : "secondary"}
      onClick={() => navigateTo(route)}
    >
      <HeaderNavLabel>{props.label}</HeaderNavLabel>
    </StyledHeaderNavButton>
  )
}

export default HeaderNavAction
