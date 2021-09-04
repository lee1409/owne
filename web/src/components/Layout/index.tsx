import { Container, Box } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import Header from "../../containers/Header"
import BottomNavigationBar from "../BottomNavigationBar"
import { GridContainer } from "../Grid"

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
      <Content>
        <GridContainer style={{ height: "100%" }}>
          {children}
        </GridContainer>
      </Content>
      <BottomNavigationBar />
    </>
  )
}

export default Layout
