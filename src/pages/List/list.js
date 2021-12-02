
import { List } from '../../template/List/list'

import { columns, dataSource } from './data'

export const ListUsers = () => (
  <List columns={columns} data={dataSource} total={dataSource.length} />
)
