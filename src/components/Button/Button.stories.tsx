import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonBaseProps, ButtonProps } from "./Button";
import React, { useState } from "react";
import { CounterBaseProps, CounterProps } from "../Counter";

const ButtonWithCounter = ({ quantity, stroke, pulse, ...props }:
  ButtonBaseProps & Pick<CounterBaseProps, 'quantity' | 'stroke' | 'pulse'>) => {
  return (<Button {...props}>
    <Button.Label>Hello</Button.Label>
    <Button.Counter quantity={quantity} stroke={stroke} pulse={pulse} /></Button>
  )
}

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    size: {
      control: 'select',
      options: [28, 36, 56],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', undefined],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
  name: "Button",

  args: {
    variant: "secondary",
    size: 36,
    loading: false,
    disabled: false
  },

  render(args) {
    return <Button {...args}><Button.Label>Button</Button.Label></Button>
  }
};

export const ButtonWithCounterStory: StoryObj<typeof ButtonWithCounter> = {
  args: {
    loading: true,
    variant: "primary",
    size: 56,
    quantity: 90,
  },

  name: "ButtonWithCounter",

  render(args) {
    return <ButtonWithCounter {...args} />
  }
}
