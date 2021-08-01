import { styled } from "@material-ui/core/styles"
import Header from "../Header"
import BottomNavigationBar from "../BottomNavigationBar"
import { Grid } from "@material-ui/core"
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
          <Grid item lg={3} xs={12}>
            <Sidebar />
          </Grid>
          <Grid item lg={9} xs={12}>
            {children}
          </Grid>
        </GridContainer>
      </Content>
      <BottomNavigationBar />
    </>
  )
}

export default Layout
