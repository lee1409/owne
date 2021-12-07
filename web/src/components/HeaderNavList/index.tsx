import { FC } from "react"
import clsx from "clsx"
import { useLocation, useHistory } from "react-router-dom"

import HeaderNavAction from "./HeaderNavAction"
import ROUTE_NAME from "../../router/routeName"

const actions = [
  {
    label: "Menu",
    route: ROUTE_NAME.MENU,
  },
  {
    label: "Stories",
    route: ROUTE_NAME.STORIES,
  },
]

type HeaderNavListProps = {
  className?: string
}

const HeaderNavList: FC<HeaderNavListProps> = ({ className }) => {
  const classes = clsx(className)
  const location = useLocation()
  const { pathname } = location
  const history = useHistory()

  const navigateTo = (route: string) => {
    history.push(route)
  }

  return (
    <div className={classes}>
      {actions.map(action => {
        const isActive = pathname === action.route
        return (
          <HeaderNavAction
            key={action.route}
            label={action.label}
            color={isActive ? "primary" : "secondary"}
            onClick={() => navigateTo(action.route)}
          />
        )
      })}
    </div>
  )
}

export default HeaderNavList
