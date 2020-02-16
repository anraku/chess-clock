import { createContext } from 'react'

export const Clock = {
  second: 600,
  setSecond: (value: number) => { }
}

export const ClockContext = createContext(
  (null as unknown) as typeof Clock
)