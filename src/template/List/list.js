import React from 'react'
import { Table } from '../../components/organisms/Table/table'
import { Row, Col } from '../../components/atoms/Grid/grid'

export const List = ({ columns, data, onChange, total }) => (
  <Row gutter={[16, 8]} justify='center' className='mt-30'>
    <Col span={20}>
      <Table columns={columns} data={data} onChange={onChange} total={total} />
    </Col>
  </Row>
)
