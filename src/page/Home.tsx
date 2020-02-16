import React, { useContext } from 'react'
import useReactRouter from 'use-react-router'
import { ClockContext } from '../context/ClockContext'

const Home = () => {
  const { history } = useReactRouter()
  const { second, setSecond } = useContext(ClockContext)
  const handleClickPlay = (e: any) => {
    e.preventDefault()
    // setSecond(1000)
    history.push('/play')
  }
  return (
    <>
      <h2>ChessClock Home</h2>
      <button onClick={handleClickPlay}>start</button>
    </>
  )
}

export default Home