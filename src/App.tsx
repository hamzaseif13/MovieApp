import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleMovie from './features/SingleMovie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' />
            <Route path='/movie/:id' element={<SingleMovie/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
