import { styled } from "@material-ui/core/styles"
import Header from "../Header"
import BottomNavigationBar from "../BottomNavigationBar"

const Content = styled("div")(({ theme }) => ({
  marginBottom: "60px",
  [theme.breakpoints.up("lg")]: {
    marginBlock: 0,
  },
}))

const Layout = ({ children }: { children: JSX.Element }) => (
  <>
    <Header />
    <Content>{children}</Content>
    <BottomNavigationBar />
  </>
)

export default Layout
