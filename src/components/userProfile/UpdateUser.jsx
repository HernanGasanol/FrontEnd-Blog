import React from 'react'
import {MdOutlineCreateNewFolder} from 'react-icons/md'
import {MdPassword} from 'react-icons/md'
import {FaBirthdayCake} from 'react-icons/fa'
import {AiOutlineMail} from  'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {RiFolderUserLine} from 'react-icons/ri'

const UpdateUser = () => {
    
 
   
 
   return (
   
   
   
   
   <div className="flex justify-center flex-col items-center  h-[calc(100vh-50px)] ">

    
        
    <form  className="flex  flex-col items-center gap-6 p-8 sm:px-20 sm:py-10 justify-around  border-[1px] h-max w-max">

          
          
          
          
           <div className="flex items-center gap-3 ">
              <span><AiOutlineUser/></span>   <input type='text' placeholder="New Username" className="pl-2  outline-0 border-b-[1px]" name="title" />
           </div>

           <div className="flex items-center gap-3">
              <span><BiUserCircle/></span> <input type='text' placeholder="New Name" className="pl-2  outline-0 border-b-[1px]" name="title" />
           </div>

           <div className="flex items-center gap-3">
             <span><RiFolderUserLine/></span>  <input type='text' placeholder="New Lastname" minLength={6} className="pl-2  outline-0 border-b-[1px]" name="title" />
           </div>

           <div className="flex items-center gap-3">
              <span><AiOutlineMail/></span> <input type='email' placeholder="New Email" className="pl-2  outline-0 border-b-[1px]" name="title" />
           </div>



           <div className="flex items-center gap-3">
              <span><FaBirthdayCake/></span>  <input type='number' placeholder="Age" className="pl-2  outline-0 border-b-[1px]" name="title" />
           </div>
 

            <div className="flex items-center gap-3">
              <span><MdPassword/></span>   <input type='password' placeholder="New Password" className="pl-2  outline-0 border-b-[1px]" name="title" />
           </div>

           <div className="flex items-center gap-4">
               <label htmlFor="fileInput" >
                     <MdOutlineCreateNewFolder class="text-[1.25rem]" />
               </label> <span>Update Profile Picture</span>
               <input type='file' id="fileInput" className="hidden" name="file" />
           </div>

             
        


           <button className="border-2 px-8 py-2 mb-3 bg-black text-white  rounded-sm">Submit</button>

    </form>


 </div>
  )
}

export default UpdateUser