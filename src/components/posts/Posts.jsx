import React from 'react'
import Post from '../post/Post'
import { useSelector } from 'react-redux'

const Posts = ({posts}) => {
  
 const arraySort = [...posts]
  
  arraySort.reverse()

  const placeholderImage="https://i.ibb.co/0Fhj5jw/Portrait-Placeholder.png"
  

  return (
    <div  className="flex flex-col w-full col-span-1 sm:col-span-2 items-center">
      {posts && arraySort.map((p) => <Post key={p._id} post={p} placeholderImage={placeholderImage} />)}
    </div>
  
  );
};

export default Posts;


// className="flex flex-col items-center h-max  justify-self-center self-center  w-full sm:w-[50%]"