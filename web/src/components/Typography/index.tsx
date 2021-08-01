import { Typography } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"

const StyledHeaderLogo = styled(Typography)({
  fontSize: "2.125rem",
})

export const HeaderLogo = ({ ...props }) => (
  <StyledHeaderLogo {...props}>Owne</StyledHeaderLogo>
)

const StyledHeaderTitle = styled(Typography)({
  fontSize: "2rem",
})

export const HeaderTitle = ({ ...props }) => <StyledHeaderTitle {...props} />

const StyledHeaderNavLabel = styled(Typography)({
  fontSize: "1.375rem",
})

export const HeaderNavLabel = ({ ...props }) => (
  <StyledHeaderNavLabel {...props} />
)

export const FoodName = styled(Typography)({
  fontSize: "1.125rem",
})

export const SectionTitle = styled(Typography)({
  fontSize: "1.25rem",
})

export const LocationName = styled(Typography)({
  fontSize: "1.375rem",
  fontWeight: 600,
})

export const FoodDescription = styled(Typography)({
  fontSize: "1rem",
})

export const SidebarActionLabel = styled(Typography)({
  fontSize: "1.5rem",
})
