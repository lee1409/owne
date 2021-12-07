import React from "react"
import Layout from "../components/Layout"

function MenuScreen() {
  const [state] = React.useState<string | null>("loading")
  // todo: request location to get the current location

  if (state === "loading") {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <div>Try to activate GPS for auto finding or search the restaurant</div>
    </Layout>
  )
}

export default MenuScreen
