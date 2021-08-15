import { render } from "@testing-library/react"
import HorizontalDrawer from "."

test("Horizontal Drawer", () => {
  const horizontalDrawer = render(<HorizontalDrawer />)
  expect(horizontalDrawer).toMatchSnapshot("Horizontal Drawer")
})
