import React, { useState } from 'react';
import './App.css';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';

import { Batting, Bowling, Cricketer, ODICareer, TestCareer } from './Cricketer';

import Icon from 'antd/lib/icon';
import CareerDetail from './CareerDetail';

const { Header, Footer, Sider, Content } = Layout;


function App() {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [visible, setVisible] = useState(false);
  const onSelect = name => {
    setSelectedPlayer(name);
    setVisible(true);
  }

  const ViewProfileButton = ({ name }) => {
    return <Button type='dashed' style={{ float: 'right' }} onClick={()=>onSelect(name)}> View full Profile >>  </Button>
  }
  const onClose = () => setVisible(false);

  return (
    <div className="App">
      <Layout>
        <Header style={{ pending: 10 }}>
          <Avatar style={{ float: 'right' }} src='./dp.png' />
          <Title style={{ color: 'white' }} level={3}>Sania</Title>
        </Header>
        <Layout>
          <Sider>
            <Menu defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Dashboard
              </Menu.Item>

              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>AboutUs</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUs' title='Country 1'>
                  <Menu.Item key='location1'>Location 1</Menu.Item>
                  <Menu.Item key='location2'>Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>

              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 440 }}>

                <Cricketer name='Virat kholi' team='IND' avatarScr='./vk.jpg'>
                  <ODICareer matches='239'>
                    <Batting runs='11,549' score='183' />
                    <br></br>
                    <Bowling wickets='4' bowlingAvg='166.25' />

                  </ODICareer>
                  <TestCareer matches='79'>
                    <Batting runs='6,749' score='243' />

                  </TestCareer>
                  <ViewProfileButton name='Virat Kholi' />
                </Cricketer>
                <Cricketer name='Jasprit Bumrah' team='IND' avatarScr='./jb.jpg'>
                  <TestCareer matches='12'>
                    <Batting runs='62' score='20.63' />

                  </TestCareer>
                  <ViewProfileButton name='Jasprit Bumrah' />
                </Cricketer>

              </div>
            </Content>
            <CareerDetail player={selectedPlayer} visible={visible} onClose={onClose} />
            <Footer style={{ textAlign: 'center' }}>Ant Design Layout example</Footer>
          </Layout>
        </Layout>

      </Layout>

    </div>
  );
}

export default App;
