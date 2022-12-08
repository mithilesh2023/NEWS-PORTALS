import React, { useState } from 'react';
import category from '../data/category';
const InsertNews = () => {
    const[title,setTitle]=useState('');
    const[categoryData,setCategoryData]=useState('')
    const[content,setContent]=useState('')
    const[image,setImage]=useState('')
  return (
    <div className='flex justify-center items-center p-3 bg-slate-300'>
        <div className='w-2/6 bg-slate-100 border-2 rounded border-gray-100 shadow-lg p-3'>
            <div className="mb-3 flex flex-col border-black">
                <label htmlFor="">Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  className='border rounded-lg px-3 py-2 '/>
            </div> 
            <div className="mb-3 flex flex-col">
                <label htmlFor="">Category</label>
                <select type="text" value={categoryData} onChange={(e)=>setCategoryData(e.target.value)} className='border rounded-lg px-3 py-2'>
                    {
                        category.map((value,index)=>{
                            return(
                                <option value={value.id} key={index}>{value.name}</option>
                            )
                        })
                    }
                </select>
            </div> 
            <div className="mb-3 flex flex-col">
                <label htmlFor="">content</label>
                <textarea rows={10}  value={content} onChange={(e)=>setContent(e.target.value)}   className='border rounded-lg px-3 py-2'></textarea>
            </div>
            <div className="mb-3">
                <button className='bg-teal-600 text-white px-2 py-2 rounded-md hover:bg-teal-900 text-2xl'>Inset News</button>
            </div>
        </div>
    </div>
  )
}

export default InsertNews