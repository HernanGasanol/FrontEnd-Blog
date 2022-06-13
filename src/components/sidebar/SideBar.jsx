import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SIdeArticle from "./SIdeArticle";

const SideBar = () => {
  
  const postsData=useSelector(state => state.postsState.postsData)


   const [post,setPost]=useState()

   const placeholderImage="https://i.ibb.co/0Fhj5jw/Portrait-Placeholder.png"
 
  
  
   useEffect(()=>{
     const num=Math.floor(Math.random()* postsData.length)
     setPost(postsData[num])
  },[])
 

  return (
   
   <div className="hidden lg:flex sm:col-start-0  pl-6 sm:col-end-1 ">
     <div className="md:flex self-start text-[#000000] px-4 bg-white justify-evenly flex-col items-center  border-[1px] h-max sticky   sm:w-[300px]  top-20   gap-4">
        {post && <SIdeArticle post={post} placeholderImage={placeholderImage} />}
    </div>
   </div>
   
  );
};

export default SideBar;
