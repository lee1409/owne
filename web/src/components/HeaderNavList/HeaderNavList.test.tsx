import { render } from "@testing-library/react"
import HeaderNavList from "."

test("HeaderNavList", () => {
  const headerNavList = render(<HeaderNavList />)
  expect(headerNavList).toMatchSnapshot("HeaderNavList")
})
