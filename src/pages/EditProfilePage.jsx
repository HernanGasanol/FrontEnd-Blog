import React, { useState } from 'react'
import { MdOutlineCreateNewFolder } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { sendFormUpdatePicUser, updateUser } from '../helpers/usersFetchs'
import { useForm } from '../hooks/useForm'
import isLoading from '../components/Loading'
import Loading from '../components/Loading'
import { logOut } from '../redux/userState'
import { SwitchLoginModal } from '../redux/navReducers'
import { deleteUser } from '../helpers/usersFetchs'
import GenericModal from '../components/GenericModal'


const EditProfilePage = () => {
  
  const  userState=useSelector(state=> state.userState)
  const {loginStatus , user,placeholderImage}=userState


  const location=useLocation()
  const path=location.pathname
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  const[isLoading,setIsLoading]=useState(false)
  const[isDeleted,setIsDeleted]=useState({ok:false, msg:''})
  const[isUpdate,setIsUpdated]=useState({ok:false,msg:''})
  const [hashtags, setHashtags]=useState([])
  const [values,reset, handleInputChange]=useForm({
    username:null,
    password:null,
    email:null, 
    name:null,
    lastname:null,
    age:null,
    profilepic:null,
  })


  
  const [file, setFile]=useState()


  const validate=(objectToVerify)=>{
    const validObj={
   
      
    }
    for(const p in objectToVerify){
       if(objectToVerify[p] === null){
          continue;
         
       }else{
          validObj[p]=objectToVerify[p]
       }
        
      } 
   
    return validObj
  }



 const {username,password,email,name,lastname,age,profilepic}=values


  const handleSubmit=async(e)=>{
    e.preventDefault()

    try {

      
      const updateFormUser = {
        username,
        name,
        lastname,
        email,
        password,
        age,
        profilepic
      };



   const formValid=(validate(updateFormUser))

    console.log(formValid)
     
    if (file) {
        try {
          setIsLoading(true);
          const { data } = await sendFormUpdatePicUser(file);
          formValid.profilepic = data.image.secure_url;
        } catch (e) {
          console.log(e);
        }
      }
      const token=user.token || '';

      console.log(token)
      const id=user.id
    



      const res = await updateUser(formValid,token,id);

    console.log(res)

     
      if(res.ok){
      
        if(formValid.password || formValid.username || formValid.email){
           dispatch(logOut())
           dispatch(SwitchLoginModal())
        
        
          }

        navigate(`/${res.user.username}`,{replace:true})

        setIsLoading(false)
        setIsUpdated({ok:true, msg:'successfully updated user'})
       
        
 
        setTimeout(()=>{
            setIsUpdated({ok:false,msg:''})  
        },1000)
     
      }



    } catch (e) {
      setIsLoading(false)
      console.log(e)
      setIsUpdated({ok:true, msg:`update failed`})
    
      setTimeout(()=>{
        setIsUpdated({ok:false,msg:''})  
    },1000)
      console.log(e);
    }
  }



  //delete user 
 
  const handleDeleteUser=async(e)=>{
    e.preventDefault()
    const token=user.token || '';
    try {
      setIsLoading(true);
       const {data}=await deleteUser(token,id)
       
      if(data.ok){
       
         dispatch(logOut())
        navigate("/",{replace:true})
        setIsLoading(false)
        setIsUpdated({ok:true, msg:'Deleted user'})
       
           
 
        setTimeout(()=>{
            setIsDeleted({ok:true,msg:''})  
        },1000)
     
      }
     
      } catch (error) {
        setIsLoading(false)
        setIsDeleted({ok:true, msg:'Delete user operation failed'})
        setTimeout(()=>{
          setIsDeleted({ok:false,msg:''})  
      },1000)
        console.log(e);
     }
  }







  return (
    <div className=" flex justify-center sm:flex-row  flex-col  items-center w-full h-full sm:h-[calc(100vh-50px)]">
      <div className="flex justify-center gap-8 sm:gap-40 flex-col sm:flex-row items-center h-full w-full">
        <div className=" flex flex-col items-center w-full border-b-[1px] py-4  justify-evenly gap-6  sm:shadow-lg  sm:h-[500px] sm:w-[400px] ">
             <div className="flex w-[160px] h-[160px] justify-center   items-center">
          
                 <img src={`${file ? URL.createObjectURL(file) : placeholderImage }`}  alt=""  className="h-[150px] w-[150px] my-4 object-cover rounded-[50%]" />

              
               

             </div>

            <div className="flex flex-col gap-4  text-lg text-left" >
                <p className="border-b-[1px] pl-2" >{username || user.username}</p>
                <p className="border-b-[1px] pl-2">{ name || user.name}</p>
                <p className="border-b-[1px] pl-2">{lastname || user.lastname}</p>
                <p className="border-b-[1px] pl-2">{ email || user.email}</p>
                <p className="border-b-[1px] pl-2">{age || user.age}</p>
                
                
            </div>
        </div>

        <div>
         
         
         
         
         
         
         
          <form
            className="flex flex-col w-full items-center gap-4 p-10   h-full shadow-sm justify-around sm:border-[1px] sm:h-[500px] sm:w-[400px]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-6 sm:gap-4">
              <label htmlFor="username" className="text-sm">
                update user
              </label>
              <input
                type="text"
                placeholder="username"
                className="pl-2  outline-0 border-b-[1px]"
                name="username"
                id="username"
                maxLength={15}
                value={username}
                autocomplete="off" 
                onChange={handleInputChange}
              
              />
            </div>
                 
            <div className="flex flex-col gap-2 ">
              <label htmlFor="name" className="text-sm"></label>
              <input
                type="text"
                maxLength={15}
                placeholder="name"
                className="pl-2  outline-0 border-b-[1px]"
                name="name"
                autocomplete="off" 
                id="name"
                value={name}
                onChange={handleInputChange}
              />
            </div>
              
      
            
            <div className="flex flex-col gap-2 ">
              <label htmlFor="lastname" className="text-sm"></label>
              <input
                type="text"
                placeholder="lastname"
                maxLength={15}
                className="pl-2  outline-0 border-b-[1px]"
                name="lastname"
                id="lastname"
                value={lastname}
                autocomplete="off" 
                onChange={handleInputChange}
              />
            </div>   
            <div className="flex flex-col gap-2 ">
              <label htmlFor="email" className="text-sm"></label>
              <input
                type="email"
                placeholder="email"
                className="pl-2  outline-0 border-b-[1px]"
                name="email"
                id="email"
                autocomplete="off" 
                maxLength={20}
                value={email}
                onChange={handleInputChange}
              />
            </div> 
       
          
            <div className="flex flex-col gap-2 ">
              <label htmlFor="password" className="text-sm"></label>
              <input
                type="password"
                maxLength={15}
                min={5}
                placeholder="password"
                className="pl-2  outline-0 border-b-[1px]"
                name="password"
                id="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
          
          

            <div className="flex flex-col gap-2 ">
              <label htmlFor="age" className="text-sm"></label>
              <input
                type="number"
                placeholder="age"
                className="pl-2  outline-0 border-b-[1px]"
                name="age"
                id="age" 
                autocomplete="off" 
                max={100}
                value={age}
                onChange={handleInputChange}
              />
            </div>



            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-2">
                  <label htmlFor="fileInput" className="text-sm">
                    <MdOutlineCreateNewFolder class="text-[1.25rem]" />
                  </label>

                  <span className="text-sm">Update post picture</span>
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    name="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                {file && <span className="text-[#40c676]">Photo added</span>}
              </div>
             
             
             
              {isLoading ? <Loading/> : 
             <div className="flex gap-2">
           
               <button className="border-2 px-8 py-2  text-black   rounded-sm" onClick={handleDeleteUser}>
                   Delete
               </button>
               
               <button className="border-2 px-8 py-2 bg-black text-white  rounded-sm">
                   Submit
               </button>
      
              </div>
              } 
          
            </div>
          </form>
              {isUpdate.ok && <GenericModal message={isUpdate.msg}/>}
              {isDeleted.ok  && <GenericModal message={isDeleted.msg}/>}


        </div>
      </div>
    </div>
  );
}

export default EditProfilePage