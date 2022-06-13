import axios from "axios"


import { setAllUsers, setUserById, setUsersByQuery } from "../redux/usersState";


export const getAllUsers=async()=>{
   try{
     const {data}=await axios.get(`${import.meta.env.VITE_BASE_URL}/users`);
       return {data}
   }catch(e){
        console.log(e)
   }
}



export const getUserByQuery=async(value,userLogged)=>{
   try{
     const {data}=await axios.get(`${import.meta.env.VITE_BASE_URL}/users?username=${value}`);
     
     

   if (data.ok) {

     if (data.users.username === value && data.users.username === userLogged.username) {
       return {
       show:true,
       data:data.users 
      } 
       
     }else{
     return {
      show:false,
      data:data.users 
     } 
     } 
   }
 
     return userResData
   }catch(e){
        console.log(e)
   }
}



export const getUserById=async(path)=>{
   try{
    
     const {data}=await axios.get(`${import.meta.env.VITE_BASE_URL}/users/${path}`);
      return data
   }catch(e){
        console.log(e)
   }
}



//update user
export const sendFormUpdatePicUser=async(file)=>{
   const formData = new FormData()
   formData.append('name' , file.name)
   formData.append('file',file)

  
  const {data}=await axios.post(`${import.meta.env.VITE_BASE_URL}/upload`,formData)
 
  return {
    data
  }

 }  

export  const updateUser=async(updateFormUser,token,id)=>{
 
 try{
 const {data} = await axios.put(`${import.meta.env.VITE_BASE_URL}/users/${id}`,updateFormUser,{
   headers: {
       "Authorization" : `Bearer ${token}`
   }
 })
 return data
 }catch(e){
  console.log(e)
 }



 }



 export const  deleteUser=async(token,id)=>{
   const {data} = await axios.delete(`${import.meta.env.VITE_BASE_URL}/users/${id}`,{
      headers: {
          "Authorization" : `Bearer ${token}`
      }
    })
   
   return {
      data
   }
 }