import React from 'react'
import { Menu, PageHeader } from 'antd'
import { Content, Footer } from 'antd/lib/layout/layout'
import Prism from './components/Prism'
import ThemeSwitch from './components/ThemeSwitch'
import { Switch, Route, Link } from 'react-router-dom'
import Gallery from './components/Gallery'
import Create from './components/Create'

function App () {

  return (
    <div className='App' style={{ textAlign: 'center' }}>
      <PageHeader
        title='MyNFT'
        subTitle='My NFT deployed to Ropsten'
        style={{ cursor: 'pointer', border: '1px solid rgb(235, 237, 240)' }}
      />

      <Menu defaultSelectedKeys={['1']} mode='horizontal' style={{ textAlign: 'center', display: 'inline-flex' }}>
        <Menu.Item key='1'><Link to='/'>Home</Link></Menu.Item>
        <Menu.Item key='2'><Link to='/gallery'>Gallery</Link></Menu.Item>
        <Menu.Item key='3'>Create</Menu.Item>
      </Menu>

      <Content style={{ padding: '0 50px' }}>
        <Switch>
          <Route exact path='/'><Prism /></Route>
          <Route path='/gallery'><Gallery /></Route>
          <Route path='/create'><Create /></Route>
        </Switch>
      </Content>

      <ThemeSwitch />

      <Footer style={{ textAlign: 'center' }}>MyNFT ©2021 Created by <a href='https://starkemedia.com' target='_blank' rel="noreferrer">StarkeMedia</a></Footer>
    </div>
  )
}

export default App
