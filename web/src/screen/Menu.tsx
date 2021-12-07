import React from "react"

function MenuScreen() {
  const [state] = React.useState<string | null>("loading")
  // todo: request location to get the current location

  if (state === "loading") {
    return <div>Loading...</div>
  }

  return (
    <div>Try to activate GPS for auto finding or search the restaurant</div>
  )
}

export default MenuScreen
