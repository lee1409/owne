import { FC } from "react"
import { BottomNavigationAction as MuiBottomNavigationAction } from "@material-ui/core"
import Icon from "../Icon"

type BottomNavigationLabels = "Explore" | "Menu" | "Stories" | "More"

type BottomNavigationActionProps = {
  label: BottomNavigationLabels
}

const BottomNavigationAction: FC<BottomNavigationActionProps> = ({
  ...props
}) => {
  const { label } = props
  return (
    <MuiBottomNavigationAction
      {...props}
      icon={<Icon variant={label} />}
      label={label}
    />
  )
}

export default BottomNavigationAction
