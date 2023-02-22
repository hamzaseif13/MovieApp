import { Movie } from "./moviesSlice"


interface Props{
  movie:Movie
}
function MovieCard({movie}:Props) {

  return (
    <div className=' shadow-sm rounded-lg relative  min-w-[12rem] w-[12rem] ' >
        <img className=' rounded-lg rounded-b-none ' 
        src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`} alt=""  loading="lazy"/>
        <div className='p-2'> 
          <h2 className='font-extrabold text-lg text-dark'>{movie.title}</h2>
          <p className="text-sm text-myblue ">{movie.overview.slice(0,40)}... </p>
        </div>
    </div>
  )
}

export default MovieCard