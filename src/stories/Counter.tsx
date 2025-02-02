import React from 'react'
import classNames from 'classnames'
import './counter.stylus'

export type CounterProps = {
  variant: 'primary' | 'secondary' | 'custom'
  size: 8 | 12 | 16 | 20 | 24
  stroke: boolean
  pulse: boolean
  className: string
  quantity: string | number
} & React.DOMAttributes<HTMLSpanElement>

export const Counter = ({
  variant = 'primary',
  size = 8,
  stroke = false,
  pulse = false,
  quantity = '',
  ...attrs
}: Partial<CounterProps>) => {
  if (typeof quantity === 'string') quantity = quantity.substring(0, 3)
  if (typeof quantity === 'number' && quantity > 99) quantity = '99+'

  // had an idea to put size-dependent logic here:
  // if ([8,12].includes(size)) { quantity = '' } else { pulse = false }
  // but then it would be split between JS and CSS, so I decided to move it there

  const fullClassName = classNames('counter', { pulse, stroke }, variant, `size-${size}`, attrs.className)
  return <span className={fullClassName} {...attrs}>{quantity}</span>
}
