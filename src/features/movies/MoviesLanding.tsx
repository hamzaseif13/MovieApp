import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function MoviesLanding() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const handleSearch = (e: any) => {
    e.preventDefault()
    navigate(`search`,{state:query})
  }
  return (
    <main className={`max-w-main m-auto  px-10 bg-[url('assets/bg.jpeg')] bg-cover bg-center text-white   h-[22rem]  flex flex-col py-20 justify-around`}>
      <div className=''>
        <h2 className='text-5xl mb-1 font-bold '>Welcome.</h2>
        <p className='text-2xl'>Millions of movies, TV shows and people to discover. Explore now.</p>
      </div>
      <div className='relative  my-4'>
        <form action="" onSubmit={e=>e.preventDefault}>
          <input type="text" className='rounded-full z-10 text-black border-dark py-3 pl-4  w-full'
            placeholder='Search for movies, keywords ...'
            value={query} onChange={e => setQuery(e.target.value)} />
          <button  type='submit' onClick={handleSearch} className='absolute  ltr:-right-1     rtl:-left-1 h-full rounded-full   px-5 btn-bg hover:text-dark'>Search</button>
        </form>
      </div>
    </main>
  )
}

export default MoviesLanding