import classNames from 'classnames'
import React from 'react'
import './loader.stylus'

export type LoaderProps = {
  color: string
  variant?: 'primary' | 'secondary'
} & React.DOMAttributes<SVGSVGElement> & React.SVGAttributes<SVGSVGElement>

export const Loader = ({ color = 'white', variant,  ...attrs }: Partial<LoaderProps>) => {
  const fullClassName = classNames('loader', variant, attrs.className)
  return (<svg viewBox="-12 -12 24 24" {...attrs} className={fullClassName}>
    <circle cx="0" cy="0" r="10" stroke={color}></circle>
  </svg>)
}

