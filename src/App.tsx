import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Homepage from './features/movies/Homepage'
import MoviesSearch from './features/movies/MoviesLanding'
import SearchPage from './features/movies/SearchPage'
import SingleMovie from './features/movies/SingleMovie'
import History from './features/watchlist/History'
import Watchlist from './features/watchlist/Watchlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/movies/:id' element={<SingleMovie/>}/>
            <Route path='/watchlist' element={<Watchlist/>}/>
            <Route path='history' element={<History/>}/>
            <Route path='search' element={<SearchPage/>}/>
            <Route path='stored' element={<History/>}/>
        </Routes>
      <Footer/>

    </BrowserRouter>
  )
}

export default App
