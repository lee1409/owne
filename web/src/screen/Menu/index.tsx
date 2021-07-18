import { Grid } from "@material-ui/core"

import { Content } from "../../components/Layout"
import Header from "../../components/Header"
import BottomNavigationBar from "../../components/BottomNavigationBar"

const Menu = () => {
  return (
    <>
      <Header />
      <Content>
        <Grid container spacing={2}>
          <Grid item>Location here</Grid>
          <Grid item>Guess you would like</Grid>
        </Grid>
      </Content>
      <BottomNavigationBar />
    </>
  )
}

export default Menu
