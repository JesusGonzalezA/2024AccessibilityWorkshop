import React from "react"
import { InputNumber } from "../../src/components/InputNumber"
import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
expect.extend(toHaveNoViolations)

describe("InputNumber", () => {
  describe("a11y", () => {
    it("should have no violations", async () => {
      const { container } = render(
        <InputNumber
          inputId="inputId"
          inputLabel="Amount"
          inputSRLabel="Amount for monstera"
          onEdit={() => {}}
          onRemove={() => {}}
          productTitle="Monstera"
        />,
      )
      expect(await axe(container)).toHaveNoViolations()
    })
  })
})
