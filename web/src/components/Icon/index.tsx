import { Icon as Iconify } from "@iconify/react"
import { SvgIcon } from "@material-ui/core"
import { FC } from "react"

const icons = {
  Location: <Iconify icon="ic:baseline-location-on" />,
  Menu: <Iconify icon="mdi:newspaper-variant" />,
  Explore: <Iconify icon="mdi:compass" />,
  Stories: <Iconify icon="mdi:progress-pencil" />,
  More: <Iconify icon="mdi:dots-horizontal-circle" />,
  Search: <Iconify icon="ic:baseline-search" />,
  AddCircle: <Iconify icon="ic:baseline-add-circle-outline" />,
}

type IconProps = {
  variant: keyof typeof icons
}

const Icon: FC<IconProps> = props => {
  const { variant } = props
  const IconifyIcon = icons[variant]

  return <SvgIcon>{IconifyIcon}</SvgIcon>
}

export default Icon
