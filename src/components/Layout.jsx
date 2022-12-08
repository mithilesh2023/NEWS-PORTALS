import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import NewsCard from './NewsCard'
import Sidebar from './Sidebar'
import news from '../data/news'
const Layout = ({category}) => {
    const[newsData,setNewData]=useState(news)
    let{cat_id}=useParams();

    const handleCategoryClick=()=>{
        const newArray=newsData.filter((val)=>val.categoryId === +cat_id)
        console.log(newsData);
        setNewData(newArray)
    }
  return (
    <div className='flex'>
        <div className='w-1/4 p-3'>
           <Sidebar category={category} news={news} handleCategoryClick={handleCategoryClick}/>
        </div>
        <div className='w-3/4'>
            {
                news.map((data,index)=>{
                    return(
                        <NewsCard key={index} data={data}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Layout