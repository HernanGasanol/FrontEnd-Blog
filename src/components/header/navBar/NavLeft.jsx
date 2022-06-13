import React, { useEffect, useMemo, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux';
import { SwitchNavModal ,SwitchSearchModal } from '../../../redux/navReducers';
import {IoIosNotificationsOutline} from 'react-icons/io'
import {GrFormClose} from 'react-icons/gr'
import { Link } from 'react-router-dom';
import { useLocation , useNavigate } from "react-router-dom";
import { searchUsers } from '../../../helpers/searchUsers';
import { useQuery } from 'react-query';
import UserSearchCard from './UserSearchCard';




const NavLeft = ({user , loginStatus , placeholderImage}) => {
 
  const dispatch = useDispatch();
  const state = useSelector((state) => state.navModalsSlice);
  
   




  const navigate=useNavigate()
  const location=useLocation()

  const [username,setUserName]=useState('');
  

  const handleInputChange=(e)=>{
     setUserName(e.target.value)  
 }


 

  //toogle SwitchSearchModal
  const handleSearchModal = () => {
    dispatch(SwitchSearchModal());
  };

  const {data }= useQuery(['userSearch',username], ()=> searchUsers(username))
  


  useEffect(()=>{
    if(!state.search){
      setUserName('')
    }
  },[state.search])


 const handleSubmitForm=(e)=>{
  e.preventDefault()
}


  return (
    <>
     
     <div className="flex items-center gap-2 group ">
              <AiOutlineSearch onClick={handleSearchModal} />
              <IoIosNotificationsOutline />
         
            {loginStatus && <Link to={`/${user.username}`}><img
                src={user.profilepic ? user.profilepic : placeholderImage}
                alt={user.username}
                className=" w-[2.5rem] h-[40px] object-cover rounded-[50%]"
           
              /></Link> }
             
          
      </div>
     
      
      {/* search container */}
     
      <div className={`${state.search ? "flex" : "hidden" }  justify-center items-center h-full w-full bg-[#0000005f] backdrop-blur-sm  w-50 fixed z-20 top-0 left-0 px-4`} >
        
       
        <div className="flex items-center w-[800px] ] px-4 sm:h-max bg-white border-2 rounded-md relative ">
            
          <div className="flex flex-col gap-4 w-full h-full mt-6">
              <div className="w-full relative top-0 left-0 h-[30px] ">
                <AiOutlineSearch className="text-[20px] absolute top-0 right-10 text-slate-300 bg-white " />
               <form onSubmit={handleSubmitForm}>
                    <input
                  type="text"
                  className="w-full text-slate-500  outline-none pl-4"
                  placeholder="search user..."
                  id="search"
                  onChange={handleInputChange}
                  name='username'
                  value={username}
                />
               </form>
           
              </div>

              <div class="w-full h-full mb-10">
                 
                        {data ?data.map(user => (
                  
                        <UserSearchCard key={user.username} user={user}/>
                      )):'loading..'}
              </div>
          </div>
          
          
              <button onClick={handleSearchModal} className="absolute top-0 right-0"><GrFormClose className="text-[20px]" /></button>
        </div>
     
     </div> 
   
    </>
  );
};

export default NavLeft;