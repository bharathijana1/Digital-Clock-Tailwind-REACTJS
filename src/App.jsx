import { useState } from 'react'
// import './App.css'
import UseEffectLearning from './Components/UseEffectLearning'
import DigitalClock from './Components/DigitalClock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <h1 className='font-bold text-xl'>Use Effect</h1>
      <UseEffectLearning /> */}
      <DigitalClock />
    </div>
  )
}

export default App
