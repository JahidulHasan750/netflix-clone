import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {AiOutlineClose} from 'react-icons/ai'
import { UserAuth } from "../context/AuthContext";
import { updateDoc,doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
const Saved = () => {
    const [movie,setMovie]= useState([])
    const {user}= UserAuth()
    const slideLeft=()=>{
        var slider= document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft -500;
    }

    const slideRight=()=>{
        
            var slider= document.getElementById('slider');
            slider.scrollLeft=slider.scrollLeft +500;
}


useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovie(doc.data()?.savedShow);
    });
  }, [user?.email]);

const movieRef= doc(db,'users', `${user?.email}`)
const deleteShow= async(passedId)=>{
    try{
        const result = movie.filter((item)=>item.id!==passedId)
        await updateDoc(movieRef,{
            savedShow:result,
        })
    }
    catch(error){
        console.log(error)
    }
}


  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block hidden"
          size={40}
        ></MdChevronLeft>
        <div
          id={"slider"}
          className="w-full h-ful overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movie.map((item, id) => (
            <div key={id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
                <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {item?.title}
                </p>
                <p onClick={()=>deleteShow(item.id)} className="absolute text-gray-300 top-4 right-4"><AiOutlineClose></AiOutlineClose></p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        ></MdChevronRight>
      </div>
    </div>
  );
};

export default Saved;
