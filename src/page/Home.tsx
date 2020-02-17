import React, { useContext } from 'react'
import useReactRouter from 'use-react-router'
import { ClockContext } from '../context/ClockContext'

import styled from 'styled-components'
import { Layout, Button } from 'antd'
import 'antd/dist/antd.css'

const Home = () => {
  const { Content } = Layout
  const { history } = useReactRouter()
  const { setSecond } = useContext(ClockContext)
  const handleClickPlay = (second:number) => (e: any) => {
    e.preventDefault()
    setSecond(second)
    history.push('/play')
  }
  return (
    <>
      <Header>
        <HeaderLabel>ChessClock</HeaderLabel>
      </Header>
      <Content>
        <Label>持ち時間を指定</Label>
        <ButtonGroup>
          <ButtonWrap type="primary" onClick={handleClickPlay(300)}>5:00</ButtonWrap>
          <ButtonWrap type="primary" onClick={handleClickPlay(600)}>10:00</ButtonWrap>
          <ButtonWrap type="primary" onClick={handleClickPlay(1800)}>30:00</ButtonWrap>
        </ButtonGroup>
      </Content>
    </>
  )
}

const Header = styled.div`
  background-color: #041528;
  height: 64px;
  padding: 0 1rem;
  line-height: 64px;
`

const HeaderLabel = styled.h2`
  text-align: left;
  color: #A7ADB4;
`

const Label = styled.h2`
  line-height: 64px;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 12px;
  margin-right: 12px;
`

const ButtonWrap = styled(Button)`
  width: 30%;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 50px;
`

export default Home