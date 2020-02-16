import React from 'react'
import useReactRouter from 'use-react-router'

const Play = () => {
  const { history } = useReactRouter()
  return (
    <>
      <h2>Play</h2>
      <p>display time here</p>
      <button onClick={() => history.push('/')}>Back Home</button>
    </>
  )
}

export default Play