import { FC } from "react"
import clsx from "clsx"

import HeaderNavAction from "./HeaderNavAction"
import ROUTE_NAME from "../../Router/routeName"

type HeaderNavListProps = {
  className?: string
}

const HeaderNavList: FC<HeaderNavListProps> = ({ className }) => {
  const classes = clsx(className)

  return (
    <div className={classes}>
      <HeaderNavAction label="Explore" route={ROUTE_NAME.EXPLORE} />
      <HeaderNavAction label="Menu" route={ROUTE_NAME.MENU} />
      <HeaderNavAction label="Stories" route={ROUTE_NAME.STORIES} />
    </div>
  )
}

export default HeaderNavList
