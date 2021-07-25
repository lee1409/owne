import { render } from "@testing-library/react"
import { FoodCard } from "."

test("FoodCard", () => {
  const foodCard = render(<FoodCard src="#" name="Test" />)
  expect(foodCard).toMatchSnapshot("FoodCard")
})

test("FoodCard with description", () => {
  const foodCard = render(
    <FoodCard
      src="#"
      name="Test"
      description="Pariatur aliqua proident in exercitation nulla commodo aute velit duis dolore."
    />
  )
  expect(foodCard).toMatchSnapshot("FoodCard")
})
