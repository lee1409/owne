import { Container, Box } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import Header from "../../containers/Header"
import BottomNavigationBar from "../BottomNavigationBar"

const Body = styled(Container)(({ theme }) => ({
  marginBottom: "60px",
  display: "flex",
}))

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <Body maxWidth="lg" disableGutters>
        {children}
      </Body>
      <BottomNavigationBar />
    </>
  )
}

export default Layout
