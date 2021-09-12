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
  fontSize: "0.75rem",
})

export const SectionTitle = styled(Typography)({
  fontSize: "1rem",
  // To align icons in the text
  display: "flex",
  alignItems: "center",
})

export const LocationName = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 500,
  [theme.breakpoints.up("lg")]: {
    fontSize: "2rem",
  },
}))

export const FoodDescription = styled(Typography)({
  fontSize: "0.75rem",
  fontWeight: 300,
})

export const SidebarActionLabel = styled(Typography)({
  fontSize: "1.5rem",
})

export const FoodTitle = styled(Typography)({
  fontSize: "1.5rem",
})

export const TagLabel = styled(Typography)({
  fontSize: "0.688rem",
})
