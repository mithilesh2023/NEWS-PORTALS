import React from 'react'
import { NavLink } from 'react-router-dom'
import category from '../data/category'

const NewsCard = ({data}) => {
  let cat=category.find((val)=>val.id==data.categoryId)
  return (
    <div className='flex gap-2 border rounded p-2 mr-2 border-gray-600 mb-3 mt-2 '>
        <div className='w-1/5'>
            <img src={data.imgUrl} className='w-full h-full ' alt="" />
        </div>
        <div className='w-4/5'>
        <h1 className='text-2xl font-black'>{data.title}</h1>
        <h6 className='text-left'>Category:{cat.name}</h6>
        <p className='text-slate-600 text-lg mt-3 text-left'>{data.contact} </p>
        <br />
        <div className='flex w-full justify-end'>
        <NavLink to={`/read/${data.id-1}`} className='bg-teal-600 px-3 py-2 rounded-lg hover:bg-teal-800 text-white'>Read More</NavLink>
        </div>
        </div>
       

    </div>
  )
}

export default NewsCard