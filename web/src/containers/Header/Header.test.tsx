import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import DesktopHeader from "./DesktopHeader"
import { MenuMobileHeader } from "./MenuHeader"
import { FoodMobileHeader } from "./FoodHeader"

test("Desktop Header", () => {
  const desktopHeader = render(
    <MemoryRouter>
      <DesktopHeader />
    </MemoryRouter>
  )
  expect(desktopHeader).toMatchSnapshot("Desktop Header")
})

test("Menu Mobile Header", () => {
  const menuMobileHeader = render(<MenuMobileHeader />)
  expect(menuMobileHeader).toMatchSnapshot("Menu Mobile Header")
})

test("Food Mobile Header", () => {
  const foodMobileHeader = render(<FoodMobileHeader />)
  expect(foodMobileHeader).toMatchSnapshot("Food Mobile Header")
})
