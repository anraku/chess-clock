import React, { useState, useContext } from 'react'
import useReactRouter from 'use-react-router'
import { ClockContext } from '../context/ClockContext'

import styled from 'styled-components'
import { Button, Input } from 'semantic-ui-react'

const Home = () => {
  const { history } = useReactRouter()
  const { setTime } = useContext(ClockContext)
  const [second, setSecond] = useState('0')
  const [minute, setMinute] = useState('0')

  const handleClickPlay = (time: number) => (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault()
    setTime(time)
    history.push('/play')
  }
  const handleClickCustomPlay = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault()
    const s = parseInt(second)
    const m = parseInt(minute)

    if (isNaN(m) || isNaN(s)) {
      return
    }
    const t = m * 60 + s
    if (t < 10) {
      return
    }
    setTime(t)
    history.push('/play')
  }
  return (
    <>
      <Header>
        <HeaderLabel>ChessClock</HeaderLabel>
      </Header>
      <>
        <Label>Select Timer</Label>
        <ButtonGroup>
          <ButtonWrap
            primary
            size="huge"
            content="5:00"
            onClick={handleClickPlay(300)}
          />
          <ButtonWrap
            primary
            size="huge"
            content="10:00"
            onClick={handleClickPlay(600)}
          />
          <ButtonWrap
            primary
            size="huge"
            content="30:00"
            onClick={handleClickPlay(1800)}
          />
        </ButtonGroup>
      </>
      <>
        <Label>Custom Timer</Label>
        <CustomTimerWrap>
          <Input
            placeholder="Minute"
            size="huge"
            value={minute}
            onChange={e => setMinute(e.target.value)}
          />
          <Input
            placeholder="Second"
            size="huge"
            value={second}
            onChange={e => setSecond(e.target.value)}
          />
          <StartButton
            primary
            size="huge"
            content="Start"
            onClick={handleClickCustomPlay}
          />
        </CustomTimerWrap>
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
  color: #a7adb4;
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

const CustomTimerWrap = styled.div`
  display: flex;
  justify-content: center;
`

const StartButton = styled(Button)`
  width: 30%;
`

export default Home
