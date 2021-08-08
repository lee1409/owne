import { render } from "@testing-library/react"
import SidebarAction from "./SidebarAction"

test("Sidebar Action", () => {
  const sidebarAction = render(<SidebarAction label="testing" to="#" />)
  expect(sidebarAction).toMatchSnapshot("Sidebar Action")
})
