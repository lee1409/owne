import { render } from "@testing-library/react"
import { FoodCard } from "."

test("FoodCard", () => {
  const foodCard = render(<FoodCard src="#" name="Test" />)
  expect(foodCard).toMatchSnapshot("FoodCard")
})
