import React, { FC, useContext, useEffect, useState } from 'react'
import useReactRouter from 'use-react-router'
import { ClockContext } from '../context/ClockContext'

import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

type Turn = boolean | null

const Play: FC = () => {
  const { history } = useReactRouter()
  const { second } = useContext(ClockContext)
  const [whiteSecond, setWhiteSecond] = useState(second)
  const [blackSecond, setBlackSecond] = useState(second)
  const [turnFlag, setTurnFlag] = useState<Turn>(null)
  const [timeOver, setTimeOver] = useState(false)
  const turnWhite: Turn = true
  const turnBlack: Turn = false

  const handleClickWhite = (e: any) => {
    e.preventDefault()
    setTurnFlag(turnBlack)
  }
  const handleClickBlack = (e: any) => {
    e.preventDefault()
    setTurnFlag(turnWhite)
  }

  useEffect(() => {
    let id: any
    const delay = 100
    const delta = delay/1000
    if (turnFlag != null) {
      id = setInterval(() => {
        turnFlag ? setWhiteSecond(prev => prev - delta) :
          setBlackSecond(prev => prev - delta)
      }, delay)
    }

    if (whiteSecond === 0 || blackSecond === 0) {
      setTimeOver(true)
      clearInterval(id)
    }

    return () => clearInterval(id)
  }, [turnFlag, whiteSecond, blackSecond])

  return (
    <>
      <h2>Timer</h2>
      <>
        {timeOver?
          <h1>Time Over: {turnFlag === turnBlack? 'White Win' : 'Black Win'}</h1>
          :
          <Container>
            <TimerBlock>
              <p>white: {whiteSecond.toFixed(1)}</p>
              <Button content="White" size="huge" onClick={handleClickWhite} disabled={turnFlag === turnBlack} />
            </TimerBlock>
            <TimerBlock>
              <p>black: {blackSecond.toFixed(1)}</p>
              <Button content="Black" color="black" size="huge" onClick={handleClickBlack} disabled={turnFlag == null || turnFlag === turnWhite} />
            </TimerBlock>
          </Container>
        }
        <Button primary content="Back Home" size="huge" onClick={() => history.push('/')} />
      </>
    </>
  )
}

const Container = styled.div`
  display: flex;
`

const TimerBlock = styled.div`
  width: 50%;
  text-align: center;
`

export default Play