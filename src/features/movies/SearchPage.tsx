import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { AppDispatch } from '../../store/store';
import { fetchGenres, fetchMovies, getGenres, getMovies } from './moviesSlice';

function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [genreId, setGenreId] = useState<number>();
    const [year, setYear] = useState<number>()
    const [query, setQuery] = useState<string>('')
    const dispatch = useDispatch<AppDispatch>()
    const genres = useSelector(getGenres)
    const movies = useSelector(getMovies)
    useEffect(() => {
        const pathQuery = searchParams.get('query')
        if(pathQuery){
            dispatch(fetchMovies({query:pathQuery}))
        }
        dispatch(fetchGenres())
    }, [])
    const changeGenre = (event: any) => {
        setGenreId(Number(event.target.value))
    }
    const search = ()=>{
        dispatch(fetchMovies({genreId,year,query}))
    }
    return (
        <main className='my-left my-5'>
            <h1 className='text-2xl text-dark'>Search For Your Favorite Movies !</h1>
            <div className='flex my-5 items-center gap-1 flex-wrap '>
                <div className='w-full lg:flex-1'>
                    <input type="text" value={query} placeholder='Search for movies, keywords ...' 
                    className='border w-full p-2 rounded' onChange={e=>setQuery(e.target.value)}/>
                </div>
                <div>
                    <select name="" id="" value={genreId} onChange={changeGenre}
                        className='border p-2 rounded'>
                        <option value={undefined}>Genre - All</option>
                        {genres && genres.map(genre => (<option
                            value={genre.id} key={genre.id}>{genre.name}</option>))}
                    </select>
                </div>
                <div >
                    <input type="number" value={year} onChange={e => setYear(Number(e.target.value))} placeholder='Year - All' className='border p-2 rounded mr-1  ' />
                    <button className='p-2 hover:opacity-80 bg-myblue text-white rounded' onClick={search}>Search</button>
                </div>
            </div>
                {movies && movies.map(movie=>{
                    return <h1>{movie.title}</h1>
                })}
        </main>
    )
}

export default SearchPage