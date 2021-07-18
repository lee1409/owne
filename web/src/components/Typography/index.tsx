import { Typography, TypographyProps } from "@material-ui/core"

export const H1 = ({ ...props }) => <Typography variant="h1" {...props} />

export const HeaderLogo = ({ ...props }) => (
  <Typography variant="h4" {...props}>
    Owne
  </Typography>
)

type HeaderTitleProps = {
  label: RouteName
} & TypographyProps

export const HeaderTitle = ({ ...props }: HeaderTitleProps) => (
  <Typography variant="h5" {...props}>
    {props.label}
  </Typography>
)

export const HeaderNavLabel = ({ ...props }) => (
  <Typography variant="body1" {...props} />
)
