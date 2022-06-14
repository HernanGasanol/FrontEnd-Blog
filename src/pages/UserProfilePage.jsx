import React, { useCallback, useEffect, useMemo, useState } from 'react'
import UserInfo from '../components/userProfile/UserInfo'
import { useDispatch, useSelector } from 'react-redux'
import PostPresentation from '../components/recomendations/PostPresentation'
import { Link, useLocation } from 'react-router-dom'
import { getUserByQuery } from '../helpers/usersFetchs'
import GenericLoading from '../components/GenericLoading'





const UserProfilePage = () => {
  

   
   
    const location=useLocation();
  
    const usernamePath = location.pathname.split("/")[1];

    const userState = useSelector((state) => state.userState);

    const { loginStatus, user,placeholderImage } = userState;

    const [allowModify, setAllowModify] = useState(false);

    const [userData, setUserQuery] = useState();

useEffect(() => {
  const fetching = async () => {
    try {
      const data = await getUserByQuery(usernamePath, user);

      setAllowModify(data.show);
      setUserQuery(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetching();
}, [usernamePath, loginStatus]);

  
 
   return (
  
   

   <div className="flex gap-4 w-full h-full mt-4 justify-center items-center flex-col">
      {userData? 
      <>
         <div className="flex flex-col px-4 sm:px-2   w-full  pb-4  h-max sm:w-[400px]">
                <div className='flex flex-col self-start'>
                  <Link to={`/${userData.username}`}>
                            <div className="flex items-center mb-2">
                                <img src={userData.profilepic ? userData.profilepic : placeholderImage } alt='user picture profile' className="h-[120px] w-[120px] object-cover  rounded-[50%] " />
                               <div className="flex flex-col">
                                 <span className="pl-4 text-[25px]">{userData.username}</span>
                                <div className="flex gap-2 pl-4 ">
                                  <span>{userData.name ||'' } </span>
                                  <span>{userData.lastname || ''} </span>
                                  <span>{userData.age || ''}</span>
                                </div>
                               </div>
                            
                            </div>
                  </Link>
                </div>
                <div className="w-[90%] items-center flex pr-4 justify-between ">
                   <span className="pl-4">Posts {userData.posts && userData.posts.length}</span>
                   {allowModify && <Link to={`/edit/profile/${userData.username}`}> <button className="w-max px-4 py-[4px] bg-black text-white border-none outline-none">edit profile</button></Link> } 
                  
                </div>


      
         </div>
        
        
        
             
         <div className="flex flex-col items-center sm:flex-row  sm:flex-wrap  gap-6  w-full  sm:w-max  h-full">{userData.posts  && userData.posts.map(post => <PostPresentation post={post} key={post._id} profilepic={userData.profilepic} username={userData.username}/>)}</div>
           
          
      

          </>  : <GenericLoading/> }
     </div> 
  )
}

export default UserProfilePage


