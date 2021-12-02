import styled from 'styled-components'

import { Table as T } from 'antd'

import { Colors } from '../../../../variables'

const { gray200 } = Colors

export const Table = styled(T)`
	&.ant-table-wrapper {
		.ant-table-thead > tr > th {
			background: ${gray200};
		}
	}

	.ant-table-pagination {
		&.ant-pagination {
			margin: 16px 0 0;
		}
	}
`
