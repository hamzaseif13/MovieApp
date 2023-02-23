import { Movie } from "./moviesSlice"
import image404 from '../../assets/404image.png'
import dot3 from '../../assets/3dot.png'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useRef, useState } from "react";
import { EllipsisHorizontalIcon, HeartIcon, ListBulletIcon } from "@heroicons/react/20/solid";
interface Props {
  movie: Movie
}
function MovieCard({ movie }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const percentage = (movie.voteAverage * 10).toPrecision(2);
  const color = movie.voteAverage > 7 ? "#0FF207" : "#EBF305"


  return (
    //155 225
    <div className=' shadow-sm rounded-lg relative   min-w-[150px] w-[150px] ' >

      <img className=' rounded-lg  h-[14rem]'
        src={movie.posterPath ? `https://image.tmdb.org/t/p/original/${movie.posterPath}` : image404} alt="" loading="lazy" />
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
        {/*  */}

        <div  onClick={()=>setMenuOpen(e=>!e)}  className="w-6 h-6 bg-slate-400  flex relative float-right top-2 right-2  justify-center items-center rounded-full hover:cursor-pointer">
          <EllipsisHorizontalIcon  />
        </div>

        <ul className={`absolute top-8 left-20 w-full z-10 text-gray-700 pt-1  ${!menuOpen && 'hidden'}`}>
          <li className="flex rounded items-center hover:bg-gray-400 bg-white">
          <ListBulletIcon className="w-4 ml-2 text-black" />
            <a className=" py-2 px-4 block whitespace-no-wrap" href="#">
               Watchlist
            </a>
           
          </li>
          <li className="flex rounded  items-center hover:bg-gray-400 bg-white">
          <HeartIcon className="w-4 ml-2 text-black"/>
            <a className=" py-2 px-4 block whitespace-no-wrap" href="#">
               Favorite
            </a>
           
          </li>
        
        </ul>
      </div>
      <div className='p-2 mt-5'>
        <a className=' text-[1em] '>{movie.title}</a>
        <p className="opacity-60">{movie.releaseDate}</p>
      </div>
    </div>
  )
}

export default MovieCard