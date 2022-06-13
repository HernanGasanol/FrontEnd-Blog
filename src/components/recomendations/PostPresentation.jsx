import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { sendFormPicPost } from "../../helpers/postsFetchs";
import GenericLoading from "../GenericLoading";
import {MdOutlineNoPhotography} from 'react-icons/md'

const PostPresentation = ({post , username,profilepic}) => {
  
  //revisar se renderiza mas veces de las necesarias

  const placeholderImage="https://i.ibb.co/0Fhj5jw/Portrait-Placeholder.png"
  return (
    <>
      {post ? (
        <div className=" w-full  h-full  sm:w-[350px]  sm:h-[350px]  rounded-md  relative group overflow-hidden ">
          {post.picture ? (
         
              <Link to={`/p/${post._id}`}>
                <img
                  src={post.picture}
                  alt="post picture"
                  className="h-full w-full object-cover"
                />
              </Link>) :( <div className="flex w-full h-full items-center justify-center"> <MdOutlineNoPhotography className="text-[30px]"/></div> )}

              <Link to={`/p/${post._id}`}>
                <div className="  flex items items-end absolute h-full w-full top-0 bg-[#0000007c] group-hover:translate-x-0 ease-linear duration-300 translate-x-[100%] ">
                  <div className="text-white px-2 py-4">
                    <p className=" text-[1.5625rem]  sm:text-sm">
                      {post.title}
                    </p>
                    <div className="w-full flex sm:gap-4 mt-4 gap-[9px] items-center">
                      <div className="flex gap-2 items-center">
                        <img
                          src={profilepic ? profilepic : placeholderImage}
                          alt=""
                          className="sm:h-[30px] sm:w-[30px] h-[40px] object-cover w-[40px]  rounded-[50%]"
                        />
                        <span className="text-[15px] font-medium sm:text-sm ">
                          {username}
                        </span>
                      </div>

                      <span className="hidden  sm:text-[10px]">
                        {new Date(post.createdAt).toDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
          
         
        </div>
      ):(
        <GenericLoading />
      )}
    </>
  );
};

export default PostPresentation;
