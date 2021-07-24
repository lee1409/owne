import { FC } from "react"
import {
  BottomNavigationAction as MuiBottomNavigationAction,
  BottomNavigationActionProps as MuiBottomNavigationActionProps,
} from "@material-ui/core"
import { useHistory } from "react-router-dom"
import Icon from "../Icon"

type BottomNavigationLabels = "Explore" | "Menu" | "Stories" | "More"

type BottomNavigationActionProps = {
  label: BottomNavigationLabels
  route: string
} & MuiBottomNavigationActionProps

const BottomNavigationAction: FC<BottomNavigationActionProps> = ({
  ...props
}) => {
  const { label, route } = props
  const history = useHistory()
  const navigateTo = (route: string) => {
    history.push(route)
  }
  return (
    <MuiBottomNavigationAction
      {...props}
      icon={<Icon variant={label} />}
      label={label}
      onClick={() => navigateTo(route)}
    />
  )
}

export default BottomNavigationAction
