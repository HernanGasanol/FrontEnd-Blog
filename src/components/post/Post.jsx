import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux'
import GenericLoading from '../GenericLoading';

const Post = ({ post,placeholderImage }) => {

  const navigate=useNavigate()

 
  const idList=()=>{
    return Math.random()* Math.random() + 1
  }

  return (
   <> 
  { post ?  
    <div className={`${post.picture ? "mb-8  h-[500px] sm:shadow-sm w-full  sm:w-[70%] rounded-lg ": 'mb-8  h-max sm:shadow-sm w-full  sm:w-[70%] rounded-lg ' }`}>
         
          <div className= {`${post.picture ? 'grid w-full h-full grid-cols-1  grid-rows-2' : ' grid-rows-1' }`}>
        
             
              <div className={`${post.picture &&  'row-span-2 group overflow-hidden relative'}`}>
                  {post.picture && (
                  <Link to={`/p/${post._id}`}>
                        <img src={`${post.picture}`} className="w-full  h-full object-center object-cover"  />
                  </Link>)}
               
                  <div className="flex justify-center group-hover:translate-y-0  translate-y-[-100%]  gap-4 flex-col items-center absolute backdrop-blur-[4px]  ease-in-out duration-500   w-full h-full top-0 bg-[#00000087]">
                        <div className="flex flex-col items-center gap-2">
                         <Link to={post.user.username ? `/${post.user.username}`:''}><img src={post.user.profilepic ? post.user.profilepic : placeholderImage } alt="" className="h-[80px] w-[80px] rounded-[50%] object-cover" /></Link> 
                         <Link to={post.user.username ? `/${post.user.username}`:''}> <span className="text-white">{post.user.username}</span></Link>
                        </div>
                        <div className="flex gap-2"> 
                           <button className="text-white border-[1px] border-white bg-transparent px-4 py-[4px]" onClick={()=> navigate(`/p/${post._id}`)}>Post details</button>
                           <button className="text-white bg-black px-4 py-[4px]" onClick={()=> navigate(`/${post.user.username}`)}>go to profile</button>
                          
                        </div>
                       
                  </div>
             
              </div>
              
              
              <div className=" row-auto bg-white h-max pb-8   px-2 py-2">
                       <div className="flex gap-4 items-center">
                         <Link to={ post.user.username ?`/${post.user.username}`:''}> <img src={post.user.profilepic ? post.user.profilepic : placeholderImage } alt="" className=" w-[2.5rem] h-[2.5rem] object-cover  rounded-[50%]"/></Link>
                         <div className="flex flex-col">
                          <Link to={post.user.username ? `/${post.user.username}`:''}><span className="text-black">{post.user.username}</span></Link>
                          <span className="text-[8px]">{new Date(post.createdAt).toDateString()}</span>
                         </div>
                      </div>

                      <div className="flex flex-col pl-14">
                          <Link to={`/p/${post._id}`}><h2 className="text-[15px] uppercase font-bold">{post.title}</h2></Link>
                          <p>{post.desc}</p>
                          <ul className="flex text-[10px] gap-2 text-[#583ed9c9]">
                            {post.hashtags.length ? post.hashtags.map((h) => (
                              <Link to={`/tag/${h}`}> <li key={idList()} className="border-[1px] px-2 py-[2px]">{`#${h}`}</li> </Link>)) : ''}
                          </ul>
                      </div>

             
              </div>
         
         
         
         </div>

    </div>  : <GenericLoading/>}</>
  );
};

export default Post





// <div className="flex  gap-4  items-center mt-2 mx-2">
// <div className="w-[2.5rem] h-[2.5rem] ">
//   <Link to={`/${post.user.username}`}>
//     <img
//       src={post.user.profilepic ? post.user.profilepic : placeholderImage }
//       alt=""
//       className=" w-full h-full object-cover  rounded-[50%]"
//     />
//   </Link>
// </div>


//  <Link to={`/${post.user.username}`}>
//  <span className="font-medium text-white">{post.user.username}</span>
//  </Link>
// </div>




// <div className="w-full h-full flex flex-col gap-1  shadow-sm ">


// <div class="w-full h-full">
//  {post.picture && (
//   <Link to={`/p/${post._id}`}>
    
//     <img src={`${post.picture}`} className="w-full h-full"  />
//   </Link>
// )}
// </div>


// <div className="flex flex-col gap-2 h-full px-2 pb-3 mt-[0.3125rem]">
//   <div className="flex justify-between ">
   
//     <div className=" flex gap-2 ">
//     <Link to={`/${post.user.username}`}>
//       <img
//         src={post.user.profilepic ? post.user.profilepic : placeholderImage}
//         alt=""
//         className="h-[1.875rem] w-[1.875rem] object-cover rounded-[50%]"
        
//       />  </Link>
//          <Link to={`/p/${post._id}`}>
//           <span className="text-[14px] font-medium">{post.title}</span></Link>
//     </div>
//     <div>
//       <span className="font-extralight text-[10px]">
//         {new Date(post.createdAt).toDateString()}
//       </span>
//     </div>
//   </div>

//   <div className="flex flex-col gap-4 pl-8">
//     <span className="font-normal text-[12px] sm:text-[13px]">
//       {post.desc}
//     </span>

//     <ul className="flex text-[10px] gap-2 text-[#583ed9c9]">
//       {post.hashtags.length-1 > 1 ?
//         post.hashtags.map((t) => (
//           <li
//             key={t}
//             className="border-[1px] px-2 py-[2px]"
//           >{`#${t}`}</li>
//         )) : ''}
//     </ul>
//   </div>
// </div>
// </div>