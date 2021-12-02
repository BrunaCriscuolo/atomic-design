import styled from 'styled-components'

import { Button as B } from 'antd'

import { Colors } from '../../../../variables'

const { primaryMain } = Colors

export const Button = styled(B)`
	&.ant-btn {
    &.search{
      border-color: ${primaryMain};
      color:${primaryMain};
    }
	}
`
