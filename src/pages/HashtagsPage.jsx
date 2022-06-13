import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import GenericLoading from '../components/GenericLoading';
import Posts from '../components/posts/Posts';
import { getPostsByHashtag } from '../helpers/postsFetchs';
import {ImFileEmpty} from  'react-icons/im'
const HashtagsPage = () => {
 
   const location=useLocation()
   const path=location.pathname.split('/')[2]
   const posts=useSelector(state => state.postsState.postsData);
   const [postsMatch, setPostsMatch]=useState([]);
   const  [notEmpty,setNotEmpty]=useState(true)
  

   const {data, isLoading}=useQuery(['postsByhashtag',path], async()=>{
     try {
       const {data}=await getPostsByHashtag(path)
       if(data.posts.length < 1){
        setNotEmpty(false)
       }
       setPostsMatch(data.posts)
   
     } catch (e) {
      console.log(e)
     }
   
   })

   

  

  
    return (
      <div className="flex  justify-center  items-center w-full mt-6 ">
        {!isLoading ?(
        
        <div className="flex flex-col gap-10 w-full  sm:w-[70%]">
            <h2 className=" ml-3 text-[30px] uppercase  w-max px-4 py-[1px] text-[#583ed9c9] ">#{path}</h2>
          {
            notEmpty ? <Posts posts={postsMatch} /> :(
                  <div className="flex w-full justify-center items-center gap-2">
                    <h3 className="text-[22px]">ops.. posts not found</h3>
                     <ImFileEmpty className="text-[20px]"/>
                  </div>
            )
          }


        </div>         
  
       
        
        
        
    

        
        
        ):<GenericLoading />}
      </div>
    );
}

export default HashtagsPage