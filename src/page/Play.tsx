import React, { FC, useContext } from 'react'
import useReactRouter from 'use-react-router'
import { ClockContext } from '../context/ClockContext'

const Play: FC = () => {
  const { history } = useReactRouter()
  const second = useContext(ClockContext)
  return (
    <>
      <h2>Play</h2>
      <p>{second}</p>
      <button onClick={() => history.push('/')}>Back Home</button>
    </>
  )
}

export default Play