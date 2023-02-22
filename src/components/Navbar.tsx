import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    const active= ({ isActive }:{isActive:boolean}) =>
    (isActive ? { color: "rgb(21 154 156 " } : undefined)

    return (
        <header >
            <nav className='flex items-center my-left   shadow-md justify-between   py-5'>
                <div>
                    <h1 className='text-4xl text-myblue'>Movie App</h1>
                </div>
                <div>
                    <ul className='flex font-extrabold gap-4 text-lg text-dark'>
                        <NavLink to="/" style={active}>
                            Home
                        </NavLink>
                        <NavLink to="/history" style={active}>
                            History
                        </NavLink>
                        <NavLink to="/watchlist" style={active}>
                            Watchlist
                        </NavLink>
                        <NavLink to="/search" style={active}>
                            Search
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar