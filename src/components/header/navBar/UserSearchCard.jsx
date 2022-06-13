import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SwitchSearchModal } from '../../../redux/navReducers';

const UserSearchCard = ({ user }) => {
 
     const placeholderImage="https://i.ibb.co/0Fhj5jw/Portrait-Placeholder.png"
  

     const dispatch=useDispatch()
  return (
   

   
   <>
      {user && (
        <div className="flex items-center pl-2 w-full  gap-4">
         <Link to={`/${user.username}`}><img
            src={ !user.profilepic ? placeholderImage : user.profilepic}
            alt=""
            className="h-[60px] object-cover w-[60px] rounded-[50%]"
            onClick={()=>dispatch(SwitchSearchModal()) }
          /></Link>
         <Link to={`/${user.username}`}> <span className="text-[15px] font-medium " onClick={()=>dispatch(SwitchSearchModal()) }>{user.username}</span></Link>
        </div>
      )}
    </>
  );
};

export default UserSearchCard;