import { Container, Box } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import Header from "../../containers/Header"
import BottomNavigationBar from "../BottomNavigationBar"
import Sidebar from "../Sidebar"

const Body = styled(Container)(({ theme }) => ({
  marginBottom: "60px",
  display: "flex",
}))

const Content = styled(Box)({
  width: "100%",
})

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <Body maxWidth="lg" disableGutters>
        <Box flexShrink={0}>
          <Sidebar />
        </Box>
        <Content flexGrow={1}>{children}</Content>
      </Body>
      <BottomNavigationBar />
    </>
  )
}

export default Layout
