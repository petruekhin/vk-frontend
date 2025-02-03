import type { Meta, StoryObj } from "@storybook/react";
import { Counter } from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "Counter",
  component: Counter,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", undefined],
    },
    size: {
      control: "select",
      options: [8, 12, 16, 20, 24],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const CounterStory: Story = {
  name: "Counter",
  args: {
    pulse: true,
    variant: "primary",
    size: 12,
    quantity: 0,
    stroke: false,
  },
};
