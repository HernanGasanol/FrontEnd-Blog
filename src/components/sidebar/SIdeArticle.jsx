import React, { useEffect, useState } from 'react'
import { MdOutlineNoPhotography } from 'react-icons/md';
import { Link } from 'react-router-dom';
const SIdeArticle = ({post, placeholderImage}) => {

 
   

  
  const list = [...post.hashtags,
    "music",
    "artist",
    "design",
    "inspiration",
    "styles",
    "notices",
  ];

  return (
    <div className="flex h-full w-full  sm:w-full shadow-sm justify-around flex-col gap-4 py-4   px-2 ">
      <div className="flex flex-col  gap-4 w-full h-max">
        <h2 className="font-medium uppercase  font-medium">{post.title}</h2>
         <div className="group overflow-hidden">
              <div className="relative">
                <Link to={`/p/${post._id}`}>{post.picture ? <img src={post.picture}/> :   <div className="flex relative w-full h-[300px] items-center justify-center"><div className="absolute backdrop-blur-[1px] w-full h-full top-0 bg-[#00000087]"></div> <MdOutlineNoPhotography className="text-[30px] "/></div>}
                <div className="flex  items-center backdrop-blur-[1px] translate-x-[-100%] group-hover:translate-x-0  justify-center absolute top-0 w-full h-full  duration-500 ease-out  bg-[#00000080]">
                    <div className="flex flex-col items-center gap-4">
                        <img src={!post.user.profilepic ? placeholderImage : post.user.profilepic} alt={post.user.username} class="h-[60px] w-[60px] object-cover rounded-[50%] "  />
                         <span className="text-[20px] font-medium text-white">{post.user.username}</span>
                    </div>
                </div></Link>  
              </div>

              
         </div>
        
        <p className="font-normal text-sm">
         {post.desc}
        </p>
        <hr />
      </div>

      <div className="w-full flex flex-col  gap-4 items-center">
        <h2 className="text-md font-medium w-full">CATEGORIES</h2>
        <ul className="flex flex-wrap  w-[300px] gap-2 px-4">
          {list.map((item) => (
           <Link to={`/tag/${item}`} key={item}><li
          
              className="font-normal first-letter:uppercase  text-[13px]  rounded-sm border-[1px] px-[12px] py-2"
            >
               {item}
            </li></Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SIdeArticle