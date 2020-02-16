import React, { useContext } from 'react'
import useReactRouter from 'use-react-router'
import { ClockContext } from '../context/ClockContext'

const Home = () => {
  const { history } = useReactRouter()
  const { setSecond } = useContext(ClockContext)
  const handleClickPlay = (second:number) => (e: any) => {
    e.preventDefault()
    setSecond(second)
    history.push('/play')
  }
  return (
    <>
      <h2>ChessClock Home</h2>
      <button onClick={handleClickPlay(300)}>5:00</button>
      <button onClick={handleClickPlay(600)}>10:00</button>
      <button onClick={handleClickPlay(1800)}>30:00</button>
    </>
  )
}

export default Home