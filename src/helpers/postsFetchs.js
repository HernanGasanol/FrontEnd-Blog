
import axios from 'axios';
import {setPostsReducer , setPostsByQuery , setPostById} from '../redux/postsState'



export const getAllPosts=async(dispatch)=>{
   try{
     const {data}=await axios.get(`${import.meta.env.VITE_BASE_URL}/posts`);
     console.log('hi')
     return {data}
   }catch(e){
        console.log(e)
   }
}



export const getPostByQuery=async(query,dispatch)=>{
   try{
     const {data}=await axios.get(`${import.meta.env.VITE_BASE_URL}/posts/${query}`);

     return {data}
   }catch(e){
        console.log(e)
   }
}
export const getPostsByHashtag=async(query)=>{
  try{
    const {data}=await axios.get(`${import.meta.env.VITE_BASE_URL}/posts?hashtag=${query}`);
     console.log(data)
    return {data}
  }catch(e){
       console.log(e)
  }
}




export const getPostById=async(id)=>{
   try{
     const {data}=await axios.get(`${import.meta.env.VITE_BASE_URL}/posts/${id}`);
     
     return {data}
   }catch(e){
        console.log(e)
   }
}



//create posts 

//crea un form con la foto y lo envía al servidor retorna la respuesta
export const sendFormPicPost=async(file)=>{
   const formData = new FormData()
   formData.append('name' , file.name)
   formData.append('file',file)

  
  const {data}=await axios.post(`${import.meta.env.VITE_BASE_URL}/upload`,formData)
 
  return {
    data
  }

 }  

export  const createPost=async(newPost,token)=>{
 const {data} = await axios.post(`${import.meta.env.VITE_BASE_URL}/posts`,newPost,{
   headers: {
       "Authorization" : `Bearer ${token}`
   }
 })

return {
   data
}

 }



//update
//crea un form con la foto y lo envía al servidor retorna la respuesta
export const sendFormUpdatePicPost=async(file)=>{
   const formData = new FormData()
   formData.append('name' , file.name)
   formData.append('file',file)

  
  const {data}=await axios.post(`${import.meta.env.VITE_BASE_URL}/upload`,formData)
 
  return {
    data
  }

 }  

export  const updatePost=async(updateFormPost,token,id)=>{
 const {data} = await axios.put(`${import.meta.env.VITE_BASE_URL}/posts/${id}`,updateFormPost,{
   headers: {
       "Authorization" : `Bearer ${token}`
   }
 })

return {
   data
}

 }



//delete




export  const deletePost=async(token,id)=>{
   const {data} = await axios.delete(`${import.meta.env.VITE_BASE_URL}/posts/${id}`,{
     headers: {
         "Authorization" : `Bearer ${token}`
     }
   })
  
  return {
     data
  }
  
   }
  