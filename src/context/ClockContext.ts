import { createContext } from 'react'

export const Clock = {
  time: 600, //second
  setTime: (_: number): void => {
    console.log(_)
  }
}

export const ClockContext = createContext(Clock)
