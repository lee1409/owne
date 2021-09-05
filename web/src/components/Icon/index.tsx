import { Icon as Iconify } from "@iconify/react"
import { SvgIcon, SvgIconProps } from "@material-ui/core"
import { FC } from "react"

const icons = {
  Location: "ic:baseline-location-on",
  Menu: "mdi:newspaper-variant",
  Explore: "mdi:compass",
  Stories: "mdi:progress-pencil",
  More: "mdi:dots-horizontal-circle",
  Search: "ic:baseline-search",
  AddCircle: "ic:baseline-add-circle-outline",
  ArrowLeft: "mdi:arrow-left",
  CircleEditOutline: "mdi:circle-edit-outline",
  HashTag: "mdi:pound-box",
  Direction: "mdi:directions",
  Close: "ic:round-close",
  Plus: "mdi:plus",
  Food: "mdi:food",
  NotePlus: "mdi:note-plus",
  Alert: "mdi:alert",
}

export type IconVariant = keyof typeof icons

type IconProps = {
  variant: IconVariant
} & SvgIconProps

const Icon: FC<IconProps> = props => {
  const { variant } = props

  return (
    <SvgIcon {...props}>
      <Iconify icon={icons[variant]} />
    </SvgIcon>
  )
}

export default Icon
