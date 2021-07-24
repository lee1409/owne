import { Typography, TypographyProps } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"

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

export const FoodName = styled(Typography)({
  fontSize: "0.75rem",
})

export const SectionTitle = styled(Typography)({
  fontSize: "1rem",
})

export const LocationName = styled(Typography)({
  fontSize: "1rem",
  fontWeight: 600,
})
