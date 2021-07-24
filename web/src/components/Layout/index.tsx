import { Container } from "@material-ui/core"
import Header from "../Header"
import BottomNavigationBar from "../BottomNavigationBar"

const Layout = ({ children }: { children: JSX.Element }) => (
  <>
    <Header />
    <Container>{children}</Container>
    <BottomNavigationBar />
  </>
)

export default Layout
