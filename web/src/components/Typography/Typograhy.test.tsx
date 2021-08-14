import React from "react"
import { render } from "@testing-library/react"
import {
  HeaderLogo,
  HeaderTitle,
  HeaderNavLabel,
  FoodName,
  FoodDescription,
  LocationName,
  SectionTitle,
  SidebarActionLabel,
  FoodTitle,
} from "."

test("HeaderLogo", () => {
  const headerLogo = render(<HeaderLogo>Testing</HeaderLogo>)
  expect(headerLogo).toMatchSnapshot("HeaderLogo")
})

test("HeaderTitle", () => {
  const headerLogo = render(<HeaderTitle>Testing</HeaderTitle>)
  expect(headerLogo).toMatchSnapshot("HeaderTitle")
})

test("HeaderNavLabel", () => {
  const headerLogo = render(<HeaderNavLabel>Testing</HeaderNavLabel>)
  expect(headerLogo).toMatchSnapshot("HeaderNavLabel")
})

test("FoodName", () => {
  const foodName = render(<FoodName>Testing</FoodName>)
  expect(foodName).toMatchSnapshot("FoodName")
})

test("FoodDescription", () => {
  const foodDescription = render(<FoodDescription>Testing</FoodDescription>)
  expect(foodDescription).toMatchSnapshot("FoodDescription")
})

test("LocationName", () => {
  const locationName = render(<LocationName>Testing</LocationName>)
  expect(locationName).toMatchSnapshot("LocationName")
})

test("SectionTitle", () => {
  const sectionTitle = render(<SectionTitle>Testing</SectionTitle>)
  expect(sectionTitle).toMatchSnapshot("SectionTitle")
})

test("SidebarActionLabel", () => {
  const sidebarActionLabel = render(
    <SidebarActionLabel>Testing</SidebarActionLabel>
  )
  expect(sidebarActionLabel).toMatchSnapshot("SidebarActionLabel")
})

// Food title in food screen
test("FoodTitle", () => {
  const foodTitle = render(<FoodTitle>Testing</FoodTitle>)
  expect(foodTitle).toMatchSnapshot("FoodTitle")
})
