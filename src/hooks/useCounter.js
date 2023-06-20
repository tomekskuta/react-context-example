import { useState } from 'react'

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial)

  function increment() {
    setCount((prev) => prev + 1)
  }

  function decrement() {
    setCount((prev) => prev - 1)
  }

  function badUpdate() {
    // Don't update state like this
    setCount(count + 1)
    setCount(count + 4)
  }

  function goodUpdate() {
    // This is how to do it
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 4)
  }

  return { count, increment, decrement, badUpdate, goodUpdate }
}
