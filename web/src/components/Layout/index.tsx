import { Container } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import Header from "../../containers/Header"
import BottomNavigationBar from "../BottomNavigationBar"

const Body = styled(Container)(({ theme }) => ({
  marginBottom: "60px",
  display: "flex",
  maxWidth: "100vw",
}))

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <Body fixed>{children}</Body>
      <BottomNavigationBar />
    </>
  )
}

export default Layout
