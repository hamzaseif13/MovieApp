import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function MoviesLanding() {
  const [query,setQuery] = useState('')
  const navigate = useNavigate()
  const handleSearch=(e:any)=>{
      e.preventDefault()
      navigate(`search?query=${query}`)
  }
  return (
    <main className={`my-left   border text-dark pt-[2rem]  items-center `}>
      <div className=''>
        <h2 className='text-5xl mb-1'>Welcome.</h2>
        <p className='text-2xl'>Millions of <span className='text-myblue'>movies</span>, TV shows and people to discover. Explore now.</p>
      </div>
      <div className='relative  my-4'>
        <input type="text" className='rounded-full border-dark py-2 px-4 border w-full' 
        placeholder='Search for movies, keywords ...' 
        value={query} onChange={e=>setQuery(e.target.value)}/>
        <a href="" onClick={handleSearch} className='absolute top-2 ltr:right-4 rtl:left-4 text-myblue hover:text-dark'>Search</a>
      </div>
    </main>
  )
}

export default MoviesLanding