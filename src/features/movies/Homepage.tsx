import React, { useEffect } from 'react'
import MoviesLanding from './MoviesLanding'
import MovieList from './MovieList'
import { ArrowRightIcon} from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDiscoverMovies, getDiscoverMovies, getStatus } from './moviesSlice'
import { AppDispatch } from '../../store/store'
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
      <section className='my-left '>
        <div>
        <h2 className='text-2xl font-bold my-4'>Discover Movies</h2>
        </div>
        <MovieList discoverMovies={discoverMovies} status={status} />
      </section>
    </main>
  )
}

export default Homepage