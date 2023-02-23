import React, { useEffect } from 'react'
import MoviesLanding from './MoviesLanding'
import MovieList from './MovieList'
import { ArrowRightIcon} from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDiscoverMovies, getDiscoverMovies, getStatus } from './moviesSlice'
import { AppDispatch } from '../../store/store'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
function Homepage() {
  const discoverMovies = useSelector(getDiscoverMovies)
  const status = useSelector(getStatus)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchDiscoverMovies())
  }, [])

  return (
    <main className=''>
      <MoviesLanding />
     
      <section className='max-w-main  ltr:pl-10 rtl:pr-10 m-auto fade-aw  ltr:after:right-0  rtl:after:left-0 relative'>
        <div className='flex items-center'>
          <h2 className='text-2xl font-extrabold my-4 '>Trending</h2>
         
        </div>
        <MovieList discoverMovies={discoverMovies} status={status} />
      </section>
    </main>
  )
}

export default Homepage