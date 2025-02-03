import React from 'react'
import classNames from 'classnames'
import './counter.stylus'

export type CounterBaseProps = {
  variant: 'primary' | 'secondary' | 'custom'
  size: 8 | 12 | 16 | 20 | 24
  stroke: boolean
  pulse: boolean
  quantity: string | number
}

export type CounterProps = Partial<CounterBaseProps>  & React.DOMAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>

export const Counter = ({
  size = 8,
  stroke = false,
  pulse = false,
  quantity = '',
  variant,
  ...attrs
}: CounterProps) => {
  if (typeof quantity === 'string') quantity = quantity.substring(0, 3)
  if (typeof quantity === 'number' && quantity > 99) quantity = '99+'

  // had an idea to put size-dependent logic here:
  // if ([8,12].includes(size)) { quantity = '' } else { pulse = false }
  // but then it would be split between JS and CSS, so I decided to move it there

  const fullClassName = classNames('counter', { pulse, stroke }, variant, `size-${size}`, attrs.className)
  return <span {...attrs} className={fullClassName}>{quantity}</span>
}
