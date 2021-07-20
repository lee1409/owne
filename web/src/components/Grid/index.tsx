import { Grid, GridProps } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"

// To prevent negative margin causing body overflow.
// Reference: https://stackoverflow.com/a/45681267/11812422
const StyledGrid = styled(Grid)(() => ({
  margin: 0,
  width: "100%",
}))

export const GridContainer = ({ ...props }: GridProps) => (
  <StyledGrid {...props} container />
)
