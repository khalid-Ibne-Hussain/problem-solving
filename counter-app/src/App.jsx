import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }


  return (
    <>
      <div>
        <h2>Counter App</h2>
        <h4>Value: {count}</h4>

        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()} disabled={count === 0}>-</button>
      </div>
    </>
  )
}

export default App
