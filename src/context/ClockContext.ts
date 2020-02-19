import { createContext } from 'react'

export const Clock = {
  time: 600, //second
  setTime: (_: number) => { }
}

export const ClockContext = createContext(Clock)