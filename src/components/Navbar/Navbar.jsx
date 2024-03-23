import React from 'react'

const Navbar = ({sidebar, setSidebar}) => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <h1 className='text-4xl font-bold uppercase'>
            Orange<span className='font-normal text-2xl'>Mint</span>
            </h1>
            {/* Navlink section */}
            <ul className='lg:flex hidden space-x-4 text-xl'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Where to find</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
            {/* Hamburger menu */}
            
        </div>
      </div>
    </div>
  )
}

export default Navbar