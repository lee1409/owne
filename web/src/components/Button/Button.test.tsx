import { render } from "@testing-library/react"
import { HeaderNavButton, IconButton } from "."

test("AddButton", () => {
  const addButton = render(<IconButton icon="add" />)
  expect(addButton).toMatchSnapshot("AddButton")
})

test("HeaderNavButton", () => {
  const headerNaveButton = render(<HeaderNavButton />)
  expect(headerNaveButton).toMatchSnapshot("HeaderNavButton")
})

test("SearchButton", () => {
  const searchButton = render(<IconButton icon="search" />)
  expect(searchButton).toMatchSnapshot("SearchButton")
})
