import React from 'react'
import { Input as I } from 'antd'

export const Input = ({ value, onChange, placeholder, size }) => (
	<I value={value} onChange={onChange} placeholder={placeholder} size={size} />
)
