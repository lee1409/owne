import { render } from "@testing-library/react"
import { SearchBar } from "."

test("SearchBar", () => {
  const searchBar = render(<SearchBar />)
  expect(searchBar).toMatchSnapshot("SearchBar")
})
