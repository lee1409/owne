import { Typography } from "@material-ui/core"

export const H1 = ({ ...props }) => <Typography variant="h1" {...props} />

export const HeaderLogo = ({ ...props }) => (
  <Typography variant="h4" {...props} />
)

export const HeaderTitle = ({ ...props }) => (
  <Typography variant="h5" {...props} />
)

export const HeaderNavLabel = ({ ...props }) => (
  <Typography variant="body1" {...props} />
)
