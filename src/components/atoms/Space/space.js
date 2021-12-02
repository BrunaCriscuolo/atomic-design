import React from 'react'
import { Space as S } from 'antd'

export const Space = ({ children, size = 'middle', direction = 'vertical', className }) => (
	<S style={{ display: 'flex' }} size={size} direction={direction} className={className}>
		{children}
	</S>
)
