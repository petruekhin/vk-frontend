import type { Meta, StoryObj } from '@storybook/react'
import { Counter } from './Counter'

const meta: Meta<typeof Counter> = {
  title: 'Counter',
  component: Counter,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Counter>

export const CounterStory: Story = {
  name: 'Counter',
  args: {
    pulse: true,
    variant: 'primary',
    size: 12,
    quantity: 0,
    stroke: false,
  },
}
