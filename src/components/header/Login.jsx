import React,{useState} from 'react'

import {useForm} from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { SwitchLoginModal } from '../../redux/navReducers'
import {loginService} from '../../helpers/authServices'
import { Navigate, useNavigate } from 'react-router-dom'



const Login = () => {
  
  const [ok, setOk]=useState(false)
  const[values,reset,handleInputChange]=useForm({
    email:'',
    password:''
  })

  const[errorMsg,setErrorMsg]=useState({
    ok:false,
    msg:''
  })
  const navigate=useNavigate()
  
     const {email , password}=values  
  
  
  const dispatch=useDispatch()

    
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      const {email , password}=values  
    
      try {

        if(email.length === 0 || password.length === 0){
          setErrorMsg({ok:true, msg:'email and password required'}) 
          return;
        }
         

        const res = await loginService(values, dispatch);

        if (res.ok) {
          reset();
          setOk(true);
          navigate(`/${res.user.username}`);
          setTimeout(handleLoginModal, 1000);
          clearTimeout(handleLoginModal);
        }else{
              setErrorMsg({ ok: true, msg: res });
        }
      } catch (error) {
        console.log(error) 

      }
    };
    const handleLoginModal = () => {
      dispatch(SwitchLoginModal());
    };


 

  
  return (
    <div className=" flex h-full items-center justify-center w-full backdrop-blur-[2px] bg-[#0000007f] fixed z-50 left-0  top-0 ">
    
      <div className="w-[350px] h-[400px]   sm:h-[450px] sm:w-[400px] px-4 bg-white relative ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center h-full gap-8"
        >      Login

          <div className="flex flex-col gap-4">
            <label htmlFor="email">Enter your email</label>
            <input
              type="email"
              placeholder="email..."
              name="email"
              id="email"   
               
              autoComplete="off" 
              onChange={handleInputChange}
              value={email}
          
              className="outline-none border-[1px] rounded-sm pl-2 px-6 py-[5px]"
            />
          </div>
          <div className="flex flex-col gap-4 max-w-[200px]">
            <label htmlFor="password">Enter your password</label>
            <input
              type="password"
              placeholder="password..."
              name="password"
              onChange={handleInputChange}
              value={password}
             
              id="password"
              className="outline-none rounded-sm border-[1px] px-6 py-[5px]"
            />
             {ok && <span className="text-[#40c676]">login successfully</span>}
              {errorMsg.ok && <span className="text-red-500">{`Error ${errorMsg.msg}`}</span>}
          </div>

          <span
            className="absolute top-[-5px] right-[5px] cursor-pointer"
            onClick={handleLoginModal}
          >
            x
          </span>

          <button className="bg-black px-[40px] py-2 text-white">submit</button>

        </form>
      </div>
    </div>
  );
}

export default Login