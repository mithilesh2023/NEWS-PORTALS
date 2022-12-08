import React from 'react'
import { NavLink } from 'react-router-dom'
const Logo=()=><h1 className='text-white  text-xl'>News Portal</h1>
const Search =()=>(
    <div className='flex'>
    <input type="search" className='border px-3 py-1 rounded-tl-md rounded-bl-md ' placeholder='search by titiel' />
    <button className=' border  px-2 py-1 rounded-tr-md rounded-br-md  text-white ' type='button'>Go</button>
    </div>
)
const LinkList=()=>(
    <div className='flex gap-5'>
        <NavLink to="/" className='text-white  p-3'>Home</NavLink>
        <NavLink to="/about" className='text-white  p-3'>About</NavLink>
        <NavLink to="/contact" className='text-white  p-3'>Contact</NavLink>
        <NavLink to="/insert" className='text-white  p-3'>Insert News</NavLink>
    </div>
)


const Header = () => {
   
  return (
    <div className='bg-teal-600 flex py-3 px-5 justify-between items-center'>
            <Logo/>
            <Search/>
            <LinkList/>
    </div>
  )
}

export default Header