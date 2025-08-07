import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/header.jsx'
import Mainport from './components/mainport.jsx'

function App() {
  const [count, setCount] = useState(0)

  return <>
  <div className='main-container'>
    <Header />
    <Mainport />
  </div>
  </>
}

export default App
