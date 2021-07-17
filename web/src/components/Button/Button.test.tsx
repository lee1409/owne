import { render } from "@testing-library/react"
import { AddButton, HeaderNavButton, SearchButton } from "."

test("AddButton", () => {
  const addButton = render(<AddButton />)
  expect(addButton).toMatchSnapshot("AddButton")
})

test("HeaderNavButton", () => {
  const headerNaveButton = render(<HeaderNavButton />)
  expect(headerNaveButton).toMatchSnapshot("HeaderNavButton")
})

test("SearchButton", () => {
  const searchButton = render(<SearchButton />)
  expect(searchButton).toMatchSnapshot("SearchButton")
})
