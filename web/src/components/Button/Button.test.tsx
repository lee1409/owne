import { render } from "@testing-library/react"
import { IconButton } from "."

test("AddButton", () => {
  const addButton = render(<IconButton icon="AddCircle" />)
  expect(addButton).toMatchSnapshot("AddButton")
})

test("SearchButton", () => {
  const searchButton = render(<IconButton icon="Search" />)
  expect(searchButton).toMatchSnapshot("SearchButton")
})
