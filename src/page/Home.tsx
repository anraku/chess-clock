import React, { useContext } from 'react'
import useReactRouter from 'use-react-router'
import { ClockContext } from '../context/ClockContext'

import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

const Home = () => {
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
      <>
        <Label>持ち時間を指定</Label>
        <ButtonGroup>
          <ButtonWrap primary size="huge" content="5:00" onClick={handleClickPlay(300)} />
          <ButtonWrap primary size="huge" content="10:00" onClick={handleClickPlay(600)} />
          <ButtonWrap primary size="huge" content="30:00" onClick={handleClickPlay(1800)} />
        </ButtonGroup>
      </>
    </>
  )
}

const Header = styled.div`
  background-color: #041528;
  height: 64px;
  padding: 1rem 1rem;
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
`

const ButtonWrap = styled(Button)`
  width: 30%;
`

export default Home