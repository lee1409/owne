import {} from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import Header from "../Header"
import BottomNavigationBar from "../BottomNavigationBar"
import { GridContainer } from "../Grid"
import Sidebar from "../Sidebar"

const Content = styled("div")(({ theme }) => ({
  marginBottom: "60px",
}))

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <Content>
        <GridContainer style={{ height: "100%" }}>
          <GridContainer item lg={3} xs={12}>
            <Sidebar />
          </GridContainer>
          <GridContainer item lg={9} xs={12}>
            {children}
          </GridContainer>
        </GridContainer>
      </Content>
      <BottomNavigationBar />
    </>
  )
}

export default Layout
