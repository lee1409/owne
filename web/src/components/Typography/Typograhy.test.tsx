import React from "react"
import { render } from "@testing-library/react"
import { H1, HeaderLogo, HeaderTitle, HeaderNavLabel } from "."

test("H1", () => {
  let h1 = render(<H1>Testing</H1>)
  expect(h1).toMatchSnapshot("h1")
})

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
