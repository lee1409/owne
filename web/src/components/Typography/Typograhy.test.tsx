import React from "react"
import { render } from "@testing-library/react"
import {
  H1,
  HeaderLogo,
  HeaderTitle,
  HeaderNavLabel,
  FoodName,
  SectionTitle,
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

test("SectionTitle", () => {
  const sectionTitle = render(<SectionTitle>Testing</SectionTitle>)
  expect(sectionTitle).toMatchSnapshot("SectionTitle")
})
