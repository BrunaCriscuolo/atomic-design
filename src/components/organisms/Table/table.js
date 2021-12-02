import React from 'react'
import { Table as T } from '../../atoms/Table/table'
import { Space } from '../../atoms/Space/space'

import { Filter } from '../../molecules/Filter/filter'

export const Table = ({ columns, data, onChange, total }) => (
  <Space>
    <Filter />
    <T columns={columns} data={data} onChange={onChange} total={total} />
  </Space>
)
