import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SwitchNavModal , SwitchLoginModal,SwitchRegisterModal } from '../../../redux/navReducers';
import Login from '../Login';
import Register from '../Register';
import NavLeft from './NavLeft';
import NavRight  from './NavRight';





const NavBar = () => {
 

    const states=useSelector(state => state.navModalsSlice)
    const userState=useSelector(state => state.userState)
    const dispatch=useDispatch()
    const path = location.pathname;
    const {user, loginStatus, placeholderImage}=userState

  
    return (
    <div className=" flex w-full h-[3.125rem]  sticky top-0 bg-white z-30  p-4 justify-between border-b-[1px] border-[ hsl(0, 0%, 90%)]">
    
      {states.loginModal && <Login/>}

      {states.registerModal && <Register/>}
     

     <NavRight user={user} loginStatus={loginStatus} />
    
    <NavLeft loginStatus={loginStatus} user={user} placeholderImage={placeholderImage}/>
    
    </div>
  );
};

export default NavBar