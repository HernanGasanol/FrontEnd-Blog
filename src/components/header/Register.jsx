import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { registerService } from '../../helpers/authServices';
import {useForm} from '../../hooks/useForm'
import { SwitchNavModal , SwitchLoginModal,SwitchRegisterModal } from '../../redux/navReducers';



const Register = () => {
     
    const [ok, setOk]=useState(false)
    const dispatch=useDispatch()
    const state=useSelector(state => state.registerState)
    const [Error , setError]=useState({error:false, msg:''})
   
    const [values,reset,handleInputChange]=useForm({
        username:'',
        email:'',
        password:''
    })
  
     const{username,email,password}=values

   
  
  
     const handleRegisterModal=()=>{

        dispatch(SwitchRegisterModal());
   }
    

 

   const handleSubmit=async(e)=>{
     e.preventDefault();
  try {
    
      for(const field in values){
         if(values[field].length === 0){
            setError({error:true, msg:'username, email and password required'})
          return;
         }
      } 

     if(password.length <6){}

     
     const res=await registerService(values,dispatch)



 
        if(res.ok){
           
           reset()
           setOk(true)
 
           dispatch(SwitchRegisterModal())
           dispatch(SwitchLoginModal())
        
          
        }else{
            console.log(res)
            setError({
              error:true,
              msg:res
            })
        }
    


  } catch (e) {
    console.log(e)
  }
      


    }

  
   

   

  
    return (
      <div className=" flex h-full items-center justify-center w-full backdrop-blur-[2px] bg-[#0000007f] fixed z-50 left-0  top-0 ">
        <div className="flex justify-center items-center h-[580px] w-[400px]  px-4 bg-white relative">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col  items-center justify-center h-max gap-8"
          >
              register
            <div className="flex flex-col justify-center items-center gap-4">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                placeholder="username..."
                name="username"
                value={username}
                onChange={handleInputChange}
                id="username"
                autocomplete="off" 
                className="outline-none rounded-sm border-[1px] px-6 py-[5px]"
                required={true}
              />
             {!username.length && <span  className="text-red-500 text-sm">you must provide an username</span>}
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder="email..."
                name="email"
                value={email}
                onChange={handleInputChange}
                id="email"
                autocomplete="off" 
                required={true}
                className="outline-none border-[1px] rounded-sm pl-2 px-6 py-[5px]"
              />
               {!email.length && <span  className="text-red-500 text-sm">you must provide an email</span>}
            </div>
           
            <div className="flex flex-col gap-4 max-w-[200px]">
              <label htmlFor="password">password</label>
              <input
                type="password"
                placeholder="password..."
                name="password"
                value={password}
                autocomplete="off" 
                minLength={6}
                onChange={handleInputChange}
                id="password"
                className="outline-none rounded-sm border-[1px] px-6 max-w-[200px] self-center py-[5px]"
              /> 
              {password.length <6 && <span className="text-red-500 text-sm">password length must be 6 or more characters</span>}
              {ok && <span className="text-[#45534b]">user created successfully</span>}
              {Error && <span className="text-red-500">{` ${Error.msg}`}</span>}
            </div>

            <span
              className="absolute top-[-5px] right-[5px] cursor-pointer"
              onClick={handleRegisterModal}
            >
              x
            </span>
           
            
            <button className="bg-black px-[40px] py-2 text-white">submit</button>
          </form>
        </div>
      </div>
    );
}

export default Register