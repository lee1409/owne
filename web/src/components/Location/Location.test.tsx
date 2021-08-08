import { render } from "@testing-library/react"
import Location from "."

test("Location Bar", () => {
  const location = render(<Location location="test" />)
  expect(location).toMatchSnapshot("Location")
})
