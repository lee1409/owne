import { Icon as Iconify } from "@iconify/react"
import { SvgIcon, SvgIconProps } from "@material-ui/core"
import { FC } from "react"

const icons = {
  Location: <Iconify icon="ic:baseline-location-on" />,
  Menu: <Iconify icon="mdi:newspaper-variant" />,
  Explore: <Iconify icon="mdi:compass" />,
  Stories: <Iconify icon="mdi:progress-pencil" />,
  More: <Iconify icon="mdi:dots-horizontal-circle" />,
  Search: <Iconify icon="ic:baseline-search" />,
  AddCircle: <Iconify icon="ic:baseline-add-circle-outline" />,
  ArrowLeft: <Iconify icon="mdi:arrow-left" />,
  CircleEditOutline: <Iconify icon="mdi:circle-edit-outline" />,
}

export type IconVariant = keyof typeof icons

type IconProps = {
  variant: IconVariant
} & SvgIconProps

const Icon: FC<IconProps> = props => {
  const { variant } = props
  const IconifyIcon = icons[variant]

  return <SvgIcon {...props}>{IconifyIcon}</SvgIcon>
}

export default Icon
