import type { Meta, StoryObj } from "@storybook/react"

import { InputNumber } from "../components/InputNumber"

const meta: Meta<typeof InputNumber> = {
  component: InputNumber,
}

export const Primary: StoryObj<typeof InputNumber> = {
  render: (args) => <InputNumber {...args} />,
  args: {
    value: 0,
    productTitle: "Monstera",
    inputId: "inputId",
    inputLabel: "Amount",
    inputSRLabel: "Amount for monstera",
    onRemove: () => {},
    onEdit: () => {},
    step: 1,
    min: 0,
    max: 10,
  },
}

export default meta
