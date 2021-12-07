import { Container } from "@material-ui/core"
import Layout from "../components/Layout"
import UnderConstruction from "../assets/under-construction.svg"

const Explore = () => (
  <Layout>
    <Container
      style={{
        display: "grid",
        placeItems: "center",
        width: "100wh",
        height: "20vh",
      }}
    >
      <img
        src={UnderConstruction}
        width={200}
        height={200}
        alt="Under Construction"
      />
      This is the main page. Wait till the data is populated
    </Container>
  </Layout>
)

export default Explore
