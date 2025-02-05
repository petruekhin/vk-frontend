import classNames from 'classnames'
import React from 'react'
import './loader.stylus'

export type LoaderProps = {
  variant?: 'primary' | 'secondary'
} & React.DOMAttributes<SVGSVGElement> &
  React.SVGAttributes<SVGSVGElement>

export const Loader = ({ variant, style, ...attrs }: LoaderProps) => {
  const fullClassName = classNames('loader', variant, attrs.className)
  return (
    <svg viewBox="-12 -12 24 24" {...attrs} className={fullClassName}>
      <circle cx="0" cy="0" r="10"></circle>
    </svg>
  )
}
