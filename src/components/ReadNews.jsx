import React from 'react'
import { useParams } from 'react-router-dom';
import NewsCard from './NewsCard'
import news from '../data/news';
const ReadNews = () => {
    let {id}=useParams()
    const data=news[id];
  return (
    <div className='px-20 py-3'>
        <NewsCard data={data}/>
    </div>
  )
}

export default ReadNews