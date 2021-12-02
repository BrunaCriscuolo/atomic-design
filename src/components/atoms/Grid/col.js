import React from 'react'
import { Col as C } from 'antd'

export const Col = ({ children, span, xs, sm, lg, xl, xxl, className }) => (
	<C span={span} xs={xs} sm={sm} lg={lg} xl={xl} xxl={xxl} className={className}>
		{children}
	</C>
)
