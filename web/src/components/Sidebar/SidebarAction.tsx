import { Link } from "@material-ui/core"
import { FC } from "react"
import { SidebarActionLabel } from "../Typography"

type SidebarActionProps = {
  label: string
  to: string
}

const SidebarAction: FC<SidebarActionProps> = props => {
  const { label, to } = props
  return (
    <SidebarActionLabel {...props}>
      <Link href={to}>{label}</Link>
    </SidebarActionLabel>
  )
}

export default SidebarAction
