import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AddNotification from './components/AddNotification'
import Notifications from './components/Notifications'

import { useCounter } from './hooks/useCounter.js'

function App() {
  const { count, badUpdate, goodUpdate } = useCounter()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h3>Count: {count}</h3>
        <button onClick={badUpdate}>badUpdate</button>
        <button onClick={goodUpdate}>goodUpdate</button>
      </div>
      <AddNotification />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Notifications />
    </>
  )
}

export default App
