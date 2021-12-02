import React from 'react'
import { Row as R } from 'antd'

export const Row = ({ children, gutter, align, justify, wrap, className }) => (
	<R align={align} gutter={gutter} justify={justify} wrap={wrap} className={className}>
		{children}
	</R>
)
