import { useState } from 'react'
import './App.css'
import { Question } from './components/Question'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container d-flex justify-content-between'>
     <h2>Questions and Answers about LOGIN</h2> 
      <Question />
    </div>
  )
}

export default App
