import { FC } from "react"
import clsx from "clsx"
import { HeaderNavButton } from "../Button"

type HeaderNavListProps = {
  className?: string
}

const HeaderNavList: FC<HeaderNavListProps> = ({ className }) => {
  const classes = clsx(className)
  return (
    <div className={classes}>
      <HeaderNavButton label="Explore" />
      <HeaderNavButton label="Menu" />
      <HeaderNavButton label="Stories" />
    </div>
  )
}

export default HeaderNavList
