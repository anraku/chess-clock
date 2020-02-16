import React from 'react'
import useReactRouter from 'use-react-router'

const Home = () => {
  const { history } = useReactRouter()
  return (
    <>
      <h2>ChessClock Home</h2>
      <button onClick={() => history.push('/play')}>start</button>
    </>
  )
}

export default Home