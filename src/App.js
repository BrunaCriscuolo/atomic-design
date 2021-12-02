import React from 'react'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'
import 'antd/dist/antd.css'

import { ListUsers } from './pages/List/list'

import { GlobalStyles } from './styles'

const App = () => (
  <ConfigProvider locale={ptBR}>
    <GlobalStyles />
    <ListUsers />
  </ConfigProvider>
)

export default App
