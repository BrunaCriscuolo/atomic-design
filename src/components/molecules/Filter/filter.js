import React from 'react'

import { Button } from '../../atoms/Button/button'
import { Input } from '../../atoms/Input/input'
import { Space } from '../../atoms/Space/space'

import { Icons } from '../../../variables'

const { Search } = Icons

export const Filter = () => (
  <Space direction='horizontal'>
    <Input placeholder='Buscar dados' />
    <Button icon={<Search />} label='Buscar' className='search' />
  </Space>

)
