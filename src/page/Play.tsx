import React, { FC, useContext } from 'react'
import useReactRouter from 'use-react-router'
import { ClockContext } from '../context/ClockContext'
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants'

const Play: FC = () => {
  const { history } = useReactRouter()
  const { second, setSecond } = useContext(ClockContext)
  return (
    <>
      <h2>Play</h2>
      <p>{second}</p>
      <button onClick={() => history.push('/')}>Back Home</button>
      <button onClick={() => setSecond(2000)}>test button</button>
    </>
  )
}

export default Play