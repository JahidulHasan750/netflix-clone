import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import Movie from './Movie';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

const Row = ({title,fetchUrl, rowId}) => {
    const [movie,setMovie]= useState([]);
   

    useEffect(()=>{
        axios.get(fetchUrl).then((res)=>{
            setMovie(res.data.results)
        })
    },[fetchUrl])
    const slideLeft=()=>{
        var slider= document.getElementById('slider'+rowId);
        slider.scrollLeft=slider.scrollLeft -500;
    }

    const slideRight=()=>{
        
            var slider= document.getElementById('slider'+rowId);
            slider.scrollLeft=slider.scrollLeft +500;
}
  return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft 
            onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block hidden' size={40}></MdChevronLeft>
            <div id={'slider' +rowId} className='w-full h-ful overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {movie.map((item,id)=>(
                   <Movie key={id} item={item}></Movie>
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}></MdChevronRight>
        </div>
   
    </div>
  )
}

export default Row