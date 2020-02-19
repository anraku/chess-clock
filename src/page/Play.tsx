import React, { FC, useContext, useEffect, useState } from 'react'
import useReactRouter from 'use-react-router'
import { ClockContext } from '../context/ClockContext'

import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

type Turn = boolean

const Play: FC = () => {
  const turnWhite: Turn = true
  const turnBlack: Turn = false
  const { history } = useReactRouter()
  const { time } = useContext(ClockContext)
  const [whiteSecond, setWhiteSecond] = useState(time)
  const [blackSecond, setBlackSecond] = useState(time)
  const [turnFlag, setTurnFlag] = useState<Turn>(turnWhite)
  const [startFlag, setStartFlag] = useState(false)
  const [timeOver, setTimeOver] = useState(false)

  const handleClickWhite = (_: any) => {
    setTurnFlag(turnBlack)
    setStartFlag(true)
  }
  const handleClickBlack = (_: any) => {
    setTurnFlag(turnWhite)
    setStartFlag(true)
  }

  useEffect(() => {
    let id: any
    const delay = 100
    const delta = delay/1000
    console.log(startFlag)
    if (startFlag) {
      id = setInterval(() => {
        turnFlag ? setWhiteSecond(prev => prev - delta) :
          setBlackSecond(prev => prev - delta)
      }, delay)
    }

    if (whiteSecond === 0 || blackSecond === 0) {
      setTimeOver(true)
      setStartFlag(false)
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
              <h3>White</h3>
              <h3>{whiteSecond.toFixed(1)}</h3>
              {turnFlag === turnWhite ? <WhiteButton onClick={handleClickWhite} /> : <DisableButton />}
            </TimerBlock>
            <TimerBlock>
              <h3>Black</h3>
              <h3>{blackSecond.toFixed(1)}</h3>
              {turnFlag === turnBlack ? <BlackButton onClick={handleClickBlack} /> : <DisableButton />}
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
  height: 50%;
  margin-bottom: 10%;
`

const TimerBlock = styled.div`
  width: 50%;
  padding: 1rem 1rem;
  text-align: center;
`

const WhiteButton = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  padding: 1rem 1rem;
  text-decoration: none;
  background: #ffffff;
  border: 2px solid #222222;
  border-bottom: solid 4px #444444;
  border-radius: 3px;

  :active {
    transform: translateY(4px);
    border-bottom: solid 2px #444444;
  }
`

const BlackButton = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  padding: 1rem 1rem;
  text-decoration: none;
  background: #555555;
  border-bottom: solid 4px #333333;
  border-radius: 3px;

  :active {
    transform: translateY(4px);
    border-bottom: solid 2px #333333;
  }
`

const DisableButton = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  padding: 1rem 1rem;
  text-decoration: none;
  background: #eeeeee;
  border-bottom: solid 4px #bbbbbb;
  border-radius: 3px;
`

export default Play