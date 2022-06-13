import React, { useEffect } from 'react'
import {MdOutlineCreateNewFolder} from 'react-icons/md'
import {MdPassword} from 'react-icons/md'
import {FaBirthdayCake} from 'react-icons/fa'
import {AiOutlineMail} from  'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {RiContactsBookUploadLine, RiFolderUserLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



const UserInfo = ({user}) => {

 
  
  
   return (
    <div className="flex justify-center flex-col items-center w-full h-[calc(100vh-50px)] ">
        
    <div className="flex flex-col p-8 items-center gap-6 sm:px-20 sm:py-10 shadow-sm justify-around border-[1px] h-max w-max">

          
    <div className="w-[80px] h-[80px]  rounded-[50%]">
            
          <Link to="/profile"><img
                src="https://instagram.faep15-1.fna.fbcdn.net/v/t51.2885-15/249091502_275675061131682_1669278957150143623_n.jpg?stp=dst-jpg_e35_p750x750_sh0.08&_nc_ht=instagram.faep15-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=mM0ROv3O8PkAX8U14q0&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjY5MzM1MTgxNDg2NDg2MzkxNw%3D%3D.2-ccb7-5&oh=00_AT8KYAXYsyIWl-cA_7HSen42iJHw0ZbMqCvsjDWizOWcNA&oe=629F3726&_nc_sid=30a2ef"
                alt=""
                className=" w-full h-full object-cover rounded-[50%] shadow-xl "
              /></Link>  
          
          </div>
          
           <div className="flex items-center gap-3 px-4 py-2">
              <span><AiOutlineUser/></span> <span>{user.username}</span>
           </div>

           <div className="flex items-center gap-3  px-4 py-2">
              <span><BiUserCircle/></span> <span>{user.name}</span>
           </div>

           <div className="flex items-center gap-3 px-4 py-2">
             <span><RiFolderUserLine/></span> <span>{user.lastname}</span>
           </div>

           <div className="flex items-center gap-3 px-4 py-2">
              <span><AiOutlineMail/></span> <span>{user.email}</span>
           </div>



           <div className="flex items-center gap-3 px-4 py-2">
              <span><FaBirthdayCake/></span> {user.age}
           </div>


        



    </div>


 </div>
  )
}

export default UserInfo