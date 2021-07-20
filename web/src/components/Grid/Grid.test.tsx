import { render } from "@testing-library/react"
import { GridContainer } from "."

test("GridContainer", () => {
  const gridContainer = render(<GridContainer />)
  expect(gridContainer).toMatchSnapshot("GridContainer")
})
