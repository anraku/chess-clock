import React, { FC, useContext, useEffect, useState } from 'react'
import useReactRouter from 'use-react-router'
import { ClockContext } from '../context/ClockContext'

type Turn = boolean | null

const Play: FC = () => {
  const { history } = useReactRouter()
  const { second } = useContext(ClockContext)
  const [white, setWhite] = useState(second)
  const [black, setBlack] = useState(second)
  const [flag, setFlag] = useState<Turn>(null)
  const turnWhite: Turn = true
  const turnBlack: Turn = false

  const handleClickWhite = (e: any) => {
    e.preventDefault()
    setFlag(turnBlack)
  }
  const handleClickBlack = (e: any) => {
    e.preventDefault()
    setFlag(turnWhite)
  }

  useEffect(() => {
    let id: any
    if (flag != null) {
      id = setInterval(() => {
        flag ? setWhite(prev => prev - 1) :
          setBlack(prev => prev - 1)
      }, 1000)
    }

    return () => clearInterval(id)
  }, [flag])

  return (
    <>
      <h2>Play</h2>
      <p>white: {white}</p>
      <p>black: {black}</p>
      <button onClick={handleClickWhite} disabled={flag === turnBlack}>White</button>
      <button onClick={handleClickBlack} disabled={flag == null || flag === turnWhite}>Black</button>
      <button onClick={() => history.push('/')}>Back Home</button>
    </>
  )
}

export default Play