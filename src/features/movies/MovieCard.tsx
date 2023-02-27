import { Movie } from "./moviesSlice"
import image404 from '../../assets/404image.png'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useRef, useState } from "react";
import { BookmarkIcon, EllipsisHorizontalIcon, HeartIcon, ListBulletIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { selectHistory, selectWatchList, StoredMovie } from "../watchlist/watchlistSlice";
import { toggleLocal as toggleAction } from '../watchlist/watchlistSlice';

interface Props {
  movie: Movie | StoredMovie
}
function MovieCard({ movie }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const percentage = (movie.voteAverage * 10).toPrecision(2);
  const color = movie.voteAverage > 7 ? "#0FF207" : "#EBF305"
  const history = useSelector(selectHistory)
  const watchList = useSelector(selectWatchList)
  const dispatch = useDispatch<AppDispatch>()
  const isHistory = () => history.some(mvs => mvs.id == movie.id)
  const isWatchlist = () => watchList.some(mvs => mvs.id == movie.id)

  const toggleLocal = (key: string) => {
    const movieDetails = {
      id: movie.id, title: movie.title,
      releaseDate: movie.releaseDate, voteAverage: movie.voteAverage,
      posterPath: movie.posterPath
    }
    dispatch(toggleAction({ key, movie: movieDetails }))
  }
  return (
    //155 225
    <div className=' shadow-sm rounded-lg relative   min-w-[150px] w-[150px] ' >
      <Link to={`/movies/${movie.id}`}>
        <img className=' rounded-lg  h-[14rem]'
          src={movie.posterPath ? `https://image.tmdb.org/t/p/original/${movie.posterPath}` : image404} alt="" loading="lazy" />
      </Link>
      <div className="w-10 absolute top-[13rem] left-2">
        <CircularProgressbar
          value={(Number(percentage))}
          text={`${percentage}`}
          background
          backgroundPadding={3}
          styles={buildStyles({
            backgroundColor: "rgba(0,0,0,0.9)",
            textSize: '2rem',
            textColor: "white",
            pathColor: color,
            trailColor: "transparent"
          })}
        />
      </div>
      <div className=" inline-block absolute top-0   w-full" >
        <div onClick={() => setMenuOpen(e => !e)} className="w-6 h-6 hover:bg-blue-300 bg-slate-300  flex relative float-right top-2 right-2  justify-center items-center rounded-full hover:cursor-pointer">
          <EllipsisHorizontalIcon />
        </div>

        <ul className={`absolute top-8 left-20 w-full z-10 text-gray-700 pt-1  ${!menuOpen && 'hidden'}`}>
          <li onClick={() => toggleLocal('watchList')} className="flex rounded-t items-center hover:bg-gray-400 bg-white">
            <BookmarkIcon className="w-4 ml-2 " color={isWatchlist() ? 'red' : 'black'} />
            <button className=" py-2 px-4 block whitespace-no-wrap" >
              Watchlist
            </button>

          </li>
          <li onClick={() => toggleLocal('history')} className="flex rounded-b  items-center hover:bg-gray-400 bg-white">
            <HeartIcon className="w-4 ml-2 " color={isHistory() ? 'red' : 'black'} />
            <button className=" py-2 px-4 block whitespace-no-wrap" >
              Mark Watched
            </button>
          </li>
        </ul>
      </div>
      <div className='p-2 mt-5'>
        <Link to={`/movies/${movie.id}`}>
          <a className=' text-[1em] hover:text-myblue'>{movie.title}</a>
        </Link>
        <p className="opacity-60">{movie.releaseDate}</p>
      </div>
    </div>
  )
}

export default MovieCard