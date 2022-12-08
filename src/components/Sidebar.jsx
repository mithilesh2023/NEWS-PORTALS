import React from 'react'
import { NavLink } from 'react-router-dom'
import category from '../data/category'
const Sidebar = ({handleCategoryClick}) => {
    const Item=(props)=>
    <NavLink to={`/category/${props.id}`} onClick={handleCategoryClick} className='text-black p-3 border hover:bg-slate-300'>{props.title}</NavLink>
  return (
    <div className='flex flex-col gap-1'>
        {
            category.map((value,index)=>{
                return(
                    <Item title={value.name} key={index} id={value.id}/>
                )
            })
        }

    </div>
  )
}

export default Sidebar