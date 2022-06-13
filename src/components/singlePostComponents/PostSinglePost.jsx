import React from "react";
import { MdOutlineNoPhotography } from "react-icons/md";
import { Link } from "react-router-dom";

const PostSinglePost = ({post,file , title , desc,placeholderImage}) => {

  let img;
  
  if(file){
    img=`${URL.createObjectURL(file)}`
  }else{
    img=`${post.picture}`
  }
   


   
  
  return (
    <div className=" flex flex-col   gap-4 mb-8 sm:shadow-sm w-full border-0   sm:w-max rounded-sm  ">
      <div className="flex gap-2 flex-col  items-center mt-2 mx-2">
        <div className="w-[5.625rem] h-[5.625rem]   ">
          <Link to={`/${post.user.username}`}>
           <img
              src={post.user.profilepic ? post.user.profilepic : placeholderImage}
              alt=""
              className=" object-cover w-full h-full rounded-[50%] "
            /> 
         
          </Link> 
         
        </div>
        <span className="font-normal text-[1.25rem] ">{post && post.user.username}</span>
      
      </div>

      
      <div className={` ${img ? 'w-full sm:w-[37.5rem]  sm:h-full flex flex-col gap-1  shadow-sm' : 'w-full sm:w-[37.5rem]  sm:h-full flex flex-col gap-1  shadow-sm'  }   `}>
           {
            img ?<img src={img} className="w-full h-full object-cover" />:(
              <div className="flex relative w-full h-[300px] items-center justify-center"><div className="absolute backdrop-blur-[1px] w-full h-full top-0 bg-[#0000008e]"></div> <MdOutlineNoPhotography className="text-[30px]"/></div>
            )

           }

        <div className="flex flex-col gap-2 px-2 pb-3 mt-[0.3125rem]">
          <div className="flex justify-between ">
            <div className=" flex gap-2 max-w-[50%]">
              
            
            <span className="text-[20px] font-medium truncate ...">{title || post.title}</span>
         
            </div>
            <div className="w-max">
              <span className="font-extralight text-[0.625rem]">
                {new Date(post.createdAt).toDateString()}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 pl-8">
           
          <textarea className="font-normal text-[1.25rem] outline-none resize-none sm:text-[0.8125rem]" readonly="readonly" value={desc || post.desc}></textarea>
           
          

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSinglePost;
