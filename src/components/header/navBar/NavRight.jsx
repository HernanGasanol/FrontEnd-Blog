import React from 'react'

import {HiMenuAlt2} from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux';
import { SwitchNavModal , SwitchLoginModal,SwitchRegisterModal } from '../../../redux/navReducers';
import {AiFillCloseSquare} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../../redux/userState';


const NavRight = ({user , loginStatus}) => {
    

  
  const dispatch=useDispatch()
  const states=useSelector(state=> state.navModalsSlice)
  const navigate=useNavigate()

   

    //toogle model
     const handleNavModal=()=>{

      dispatch(SwitchNavModal())
      
    
    }

    //handleLogOut

    const handleLogOut=()=>{
       dispatch(logOut())
       dispatch(SwitchNavModal())
       navigate('/')
       
    }
    

     const handleLoginModal=()=>{
      dispatch(SwitchNavModal()) 
      dispatch(SwitchLoginModal())     
     }

     const handleRegisterModal=()=>{
      dispatch(SwitchNavModal())
      dispatch(SwitchRegisterModal())

     }
 
  return (
     <>
     
      <HiMenuAlt2 onClick={handleNavModal}  className={`${!states.nav && 'opacity-0'} cursor-pointer `}/>

      
      
      
        <div className={` ${states.nav && 'translate-x-[-100%]'} bg-white ease-in-out duration-500  flex flex-col justify-around items-center border-r-[1px] h-full backdrop-blur-sm fixed z-10 top-0 left-0 w-[70%] sm:w-[250px]`}>
          
          <div className="w-full h-full  ">  
         
          <AiFillCloseSquare onClick={handleNavModal} className="relative top-0 left-0 cursor-pointer"/>
             
              
              <ul className="flex  justify-around items-center  flex-col h-[80%] bg-grey w-full">
                         
                         
                          <Link to="/"><li onClick={handleNavModal}>HOME</li></Link>
                         
                          { !loginStatus  && <li onClick={handleLoginModal} >LOGIN</li>}    
             
                          {!loginStatus  &&   <li onClick={handleRegisterModal}>REGISTER</li>}
             
                          {loginStatus && <Link to="/createpost"><li onClick={handleNavModal}>CREATE</li></Link> }
             
                   
                          
                           {loginStatus && <li className="cursor-pointer" onClick={handleLogOut}>LOGOUT</li> }  
                
              </ul>
         
              <div className="flex items-center justify-center gap-3 text-lg">
                   <a href="#" onClick={handleNavModal}><AiOutlineInstagram/></a>
                   <a href="#" onClick={handleNavModal}> <FiTwitter/></a>
                   <a href="#" onClick={handleNavModal}> <AiFillGithub/></a> 
                   <a href="https://www.linkedin.com/in/hern%C3%A1n-gasa%C3%B1ol-668998194/" onClick={handleNavModal} target="_blank"><AiOutlineLinkedin/></a>
              </div>
         
        
         </div>

  
      

       </div>
    
       </>
  )
}

export default NavRight
