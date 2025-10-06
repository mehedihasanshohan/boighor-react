import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-sky-800/50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Listed Books</a></li>
        <li><a>Pages To Read</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BoiGhor</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Listed Books</a></li>
      <li><a>Pages To Read</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className='btn btn-accent'>Sign In</button>
    <button className='btn btn-info ml-4 mr-4'>Sign Up</button>
  </div>
</div>
  )
}

export default Navbar