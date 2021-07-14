import React from "react"
import { render } from "@testing-library/react"
import { ShareButton } from "../button"

test("share button", () => {
  let button = render(<ShareButton></ShareButton>)
  expect(button).toMatchSnapshot("shareButton")
})
