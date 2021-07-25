import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import HeaderNavList from "."

test("HeaderNavList", () => {
  const headerNavList = render(
    <MemoryRouter>
      <HeaderNavList />
    </MemoryRouter>
  )
  expect(headerNavList).toMatchSnapshot("HeaderNavList")
})
