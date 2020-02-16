import { createContext } from 'react'

export const Clock = {
  second: 600,
  setSecond: (_: number) => { }
}

export const ClockContext = createContext(Clock)