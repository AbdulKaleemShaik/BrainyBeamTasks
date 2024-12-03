import { useState } from 'react'
import './App.css'
import DynamicForm from './Components/DynamicForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DynamicForm />
    </>
  )
}

export default App
