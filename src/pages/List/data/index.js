import React from 'react'
import { Button } from '../../../components/atoms/Button/button'

import { Icons } from '../../../variables'

const { Edit } = Icons
export const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Tipo de acesso',
    dataIndex: 'accessType',
    key: 'accessType'
  },
  {
    title: 'Ação',
    key: 'action',
    render: () => (
      <Button
        icon={<Edit />}
        size='small'
        label='Editar'
      />
    )
  }
]

export const dataSource = [
  {
    key: '1',
    id: '123456',
    name: 'Jane Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jhon Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jane Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jhon Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jane Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jhon Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jane Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jhon Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jane Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jhon Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jane Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jhon Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jane Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jhon Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jane Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jhon Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jane Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jhon Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jane Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jhon Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jane Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
  {
    key: '1',
    id: '123456',
    name: 'Jhon Do',
    email: 'janedo@teste.com',
    accessType: 'Master',
  },
];
