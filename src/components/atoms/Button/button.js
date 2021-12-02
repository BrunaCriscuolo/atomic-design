import React from 'react'
import { Button as B } from './styles'

export const Button = ({
  onClick,
  label,
  icon,
  className,
}) => (
  <B
    onClick={onClick}
    icon={icon}
    className={className}
  >
    {label}
  </B>
)
