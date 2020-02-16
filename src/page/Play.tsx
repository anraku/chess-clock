import React, { FC, useContext, useEffect, useState } from 'react'
import useReactRouter from 'use-react-router'
import { ClockContext } from '../context/ClockContext'

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
    if (turnFlag != null) {
      id = setInterval(() => {
        turnFlag ? setWhiteSecond(prev => prev - 1) :
          setBlackSecond(prev => prev - 1)
      }, 1000)
    }

    if (whiteSecond === 0 || blackSecond === 0) {
      setTimeOver(true)
      clearInterval(id)
    }

    return () => clearInterval(id)
  }, [turnFlag, whiteSecond, blackSecond])

  return (
    <>
      <h2>Play</h2>
      {timeOver?
        <h1>Time Over: {turnFlag === turnBlack? 'White Win' : 'Black Win'}</h1>
        :
        <>
          <p>white: {whiteSecond}</p>
          <p>black: {blackSecond}</p>
          <button onClick={handleClickWhite} disabled={turnFlag === turnBlack}>White</button>
          <button onClick={handleClickBlack} disabled={turnFlag == null || turnFlag === turnWhite}>Black</button>
        </>
      }
      <button onClick={() => history.push('/')}>Back Home</button>
    </>
  )
}

export default Play