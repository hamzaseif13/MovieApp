import logo from '../assets/logo.svg'
import searchIcon from '../assets/searchIcon.svg'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
function Navbar() {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const handleSearch = (e: any) => {
        e.preventDefault()
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
                <div>
                    {
                        open ?
                            <span className='text-white text-3xl mr-2 hover:cursor-pointer' onClick={() => setOpen(false)}>&#10005;</span> :
                            <img onClick={() => setOpen(true)} src={searchIcon} alt="" className='h-8 hover:cursor-pointer' />
                    }
                </div>

            </nav>
            {open &&
                <form onSubmit={handleSearch} className='first-letter:border m-auto max-w-main bg-white px-10 shadow-md flex items-center absolute w-full'>
                    <MagnifyingGlassIcon className='h-6' />
                    <input type="text" placeholder='Search for a movie , keyword...' className='p-3 w-full focus:outline-none ' value={query} onChange={e => setQuery(e.target.value)} />
                    <span className='opacity-80 text-xl mr-2 hover:cursor-pointer' onClick={() => setQuery('')}>&#10005;</span>
                </form>}
        </header>
    )
}

export default Navbar