import logo from '../assets/logo.svg'
import searchIcon from '../assets/searchIcon.svg'
import { HeartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectHistory, selectWatchList } from '../features/watchlist/watchlistSlice'
function Navbar() {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const location = useLocation()
    const history = useSelector(selectHistory)
    const watchList = useSelector(selectWatchList)
    const handleSearch = (e: any) => {
        e.preventDefault()
        location.search = '?query' + query
        navigate(`search`, { state: query })
        setOpen(false)
    }
    return (
        <header className='bg-darkblue' >
            <nav className='flex items-center m-auto max-w-main px-10  shadow-md justify-between   h-16'>
                <div>
                    <Link to="/">
                        <img className='w-[154px] h-[20px] min-w-[154px] min-h-[20px]' src={logo} alt="" />
                    </Link>
                </div>
                <div className='flex items-center gap-2 '>
                    <div className=''>
                        <Link to='stored'>
                            <HeartIcon className='w-8  ' color={(history.length>0 || watchList.length>0)?'red':'#01B4E4' } />
                        </Link>
                    </div>
                    <div>
                        {
                            open ?
                                <span className='text-white text-3xl mr-2 hover:cursor-pointer' onClick={() => setOpen(false)}>&#10005;</span> :
                                <img onClick={() => setOpen(true)} src={searchIcon} alt="" className='h-8 hover:cursor-pointer' />
                        }
                    </div>
                </div>

            </nav>
            {open &&
                <div className='w-full border-b border bg-white -translate-x-1/2 z-10 left-1/2 absolute'>
                    <form onSubmit={handleSearch} className='  max-w-main bg-white px-10  flex items-center justify-center  w-full m-auto'>
                        <MagnifyingGlassIcon className='h-6' />
                        <input type="text" placeholder='Search for a movie , keyword...' className='p-3 w-full focus:outline-none ' value={query} onChange={e => setQuery(e.target.value)} />
                        <span className='opacity-80 text-sm mr-2 hover:cursor-pointer' onClick={() => setQuery('')}>&#10005;</span>
                    </form>
                </div>}
        </header>
    )
}

export default Navbar