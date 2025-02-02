import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import React, { useState } from "react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonLoadingStory: Story = {
  name: "ButtonLoading",
  render(_, __) {
    return <Button loading variant="primary">Loading</Button>
  },
};

export const ButtonDisabledStory: Story = {
  name: "ButtonDisabled",
  render(_, __) {
    return <Button disabled variant="primary">Disabled</Button>
  },
};

export const ButtonTextStory: Story = {
  name: "ButtonText",
  render(_, __) {
    return <Button>Button text</Button>
  },
};

export const ButtonTextCounterStory: Story = {
  args: {
    loading: true,
    variant: "secondary",
    size: 28,
  },

  name: "ButtonTextCounter",

  render(args) {
    let [quantity, setQuantity] = useState(95)
    return <Button onClick={() => setQuantity(quantity + 1)} {...args} disabled={quantity>99} >
      <span>Text</span>
      <Button.Counter quantity={quantity} size={24} />
    </Button>
  }
}
