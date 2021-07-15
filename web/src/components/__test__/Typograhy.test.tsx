import React from "react"
import { render } from "@testing-library/react"
import { H1 } from "../Typography"

test("H1", () => {
  let h1 = render(<H1>Testing</H1>)
  expect(h1).toMatchSnapshot("h1")
})
