import React from 'react'
import { Table as T } from './styles'

export const Table = ({ columns, data, title, showHeader, onChange, total, loading }) => (
	<T
		bordered
		size='middle'
		showHeader={showHeader}
		columns={columns}
		dataSource={data}
		title={title}
		loading={loading}
		pagination={{
			position: ['none', 'bottomRight'],
			showSizeChanger: true,
			onChange,
			total
		}}
	/>
)
