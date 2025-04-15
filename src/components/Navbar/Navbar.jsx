import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { NavbarMenu } from '../../mockData/data';
import { CgProfile } from "react-icons/cg";
import logo from '../../assets/10363995.png'

const Navbar = () => {
  return (
    <>
    <nav className='shadow-md bg-white'>
      <div className="container flex justify-between items-center py-2" >
        {/* logo section */}
        <div className='text-2xl flex items-center gap-2 '>
        <img src={logo} alt="Logo" className="w-20  object-contain" />
        </div>

        {/* Menu section */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-6 text-gray-600'>
            {
              NavbarMenu.map((item) =>{
                return(
                  <li key={item.id}>
                    <a href={item.link} className='inline-block py-1 px-3  hover:text-primary font-semibold'>{item.title}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>

        {/* Icon section */}
        <div className='flex '>
        <button className='text-2xl text-primary  p-2 '>
        <FiSearch />
        </button>
        <button className='text-2xl text-primary p-2'>
        <CgProfile />
        </button>
        <button className='text-2xl text-primary p-2 '>
        <FiShoppingCart />
        </button>
        
        </div>
      </div>
    </nav>
    </>
    
  )
}

export default Navbar