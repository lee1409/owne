import { render } from "@testing-library/react"
import { IconButton, StoryButton } from "."
import ChickenRiceImg from "../../assets/chicken_rice.jpg"

test("AddButton", () => {
  const addButton = render(<IconButton icon="AddCircle" />)
  expect(addButton).toMatchSnapshot("AddButton")
})

test("SearchButton", () => {
  const searchButton = render(<IconButton icon="Search" />)
  expect(searchButton).toMatchSnapshot("SearchButton")
})

test("StoryButton", () => {
  const storyButton = render(
    <StoryButton src={ChickenRiceImg} alt="Chiken Rice" />
  )
  expect(storyButton).toMatchSnapshot("StoryButton")
})
