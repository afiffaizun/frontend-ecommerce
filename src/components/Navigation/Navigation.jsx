import React from 'react'
import { Wishlist } from '../common/Wishlist'
import { AccountIcon } from '../common/AccountIcon'
import { CartIcon } from '../common/CartIcon'
import './Navigation.css'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='flex items-center py-6 px-16 justify-between gap-40'>
        <div className='flex items-center gap-6'>
            {/* Logo */}
            <a className='text-3xl text-black gap-8'>Mafif</a>
        </div>

        <div className='flex items-center flex-wrap gap-10 flex-1'>
            {/* Navigation Links */}
            <ul className='flex gap-14 text-gray-600 cursor-pointer'>
                <li><NavLink to='/' className={({isActive})=> isActive ? 'active-link':''}>Shop</NavLink></li>
                <li><NavLink to='/men' className={({isActive})=> isActive ? 'active-link':''}>Men</NavLink></li>
                 <li><NavLink to='/women' className={({isActive})=> isActive ? 'active-link':''}>Women</NavLink></li>
                <li><NavLink to='/kids' className={({isActive})=> isActive ? 'active-link':''}>Kids</NavLink></li>
            </ul>
        </div>

        {/* Search Bar */}
        <div className='flex justify-center'>
        <div className='flex overflow-hidden'>
          <div className="flex items-center justify-center px-10">
            <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
            <input type="text" className="px-4 py-2 outline-none" placeholder="Search"/>
          </div> 
        </div>

        {/* Icons Actions */}
        <div className='flex flex-wrap items-center gap-4'>
          <ul className='flex items-center gap-8'>
            <li><button><Wishlist/></button></li>
            <li><button><AccountIcon/></button></li>
            <li><Link to='/cart-items'><CartIcon/></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
