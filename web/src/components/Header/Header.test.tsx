import { render } from "@testing-library/react"
import Header from "."

test("Header", () => {
  const header = render(<Header />)
  expect(header).toMatchSnapshot("Header")
})
