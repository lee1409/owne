import { render } from "@testing-library/react"
import Tag from "./index"

test("Tag", () => {
  const sidebarAction = render(<Tag label="testing" count={1} />)
  expect(sidebarAction).toMatchSnapshot("Tag")
})
