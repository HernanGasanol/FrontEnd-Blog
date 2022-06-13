
import axios from "axios"
import { failedLogin, login } from "../redux/userState";

import { failRegister, register } from "../redux/registerState";
import jwtDecode from "jwt-decode";


export const registerService = async (values, dispatch) => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/auth/register`,
      values,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (data.ok) {
 
      dispatch(register(data.user));
      return data;
    }
  } catch (error) {
    return error.response.data.msg;
  }
};



export const loginService = async (values, dispatch) => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/auth/login`,
      values,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (data.ok) {
      dispatch(login(data.user));
      return data;
    }
  } catch (e) {
    dispatch(failedLogin(e.response.data.msg));

    console.log(e.response.data.msg);
    return e.response.data.msg;
  }
};


//funciona
export const persistUser=async(id,dispatch,token)=>{
   
   try{
    
     
        const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/${id}`);

        if (data.ok) {
          const { user } = data;
          dispatch(login({...user,token}))
           return user
        }
   
    
   
   

     
     
   }catch(e){
        console.log(e)
        dispatch(failedLogin(e.response.data.msg))
   }
}

