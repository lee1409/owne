import { FC } from "react"
import {
  BottomNavigationAction as MuiBottomNavigationAction,
  SvgIcon,
} from "@material-ui/core"
import { Icon } from "@iconify/react"

type BottomNavigationLabels = "Explore" | "Menu" | "Stories" | "More"

const icons: Record<BottomNavigationLabels, JSX.Element> = {
  Menu: <Icon icon="mdi:newspaper-variant" />,
  Explore: <Icon icon="mdi:compass" />,
  Stories: <Icon icon="mdi:progress-pencil" />,
  More: <Icon icon="mdi:dots-horizontal-circle" />,
}

type BottomNavigationActionProps = {
  label: BottomNavigationLabels
}

const BottomNavigationAction: FC<BottomNavigationActionProps> = ({
  ...props
}) => {
  const { label } = props
  const Icon = icons[label]
  return (
    <MuiBottomNavigationAction
      {...props}
      icon={<SvgIcon>{Icon}</SvgIcon>}
      label={label}
    />
  )
}

export default BottomNavigationAction
