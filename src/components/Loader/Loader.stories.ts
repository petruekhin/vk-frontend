import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
  title: "Loader",
  component: Loader,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const LoaderStory: Story = {
  name: "Loader",
  args: {
    variant: "secondary",
    width: 80,
    height: 80,
  },
};
