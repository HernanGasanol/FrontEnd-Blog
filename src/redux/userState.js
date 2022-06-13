import { createSlice } from '@reduxjs/toolkit'


let initialState={
  loginStatus:false,
  placeholderImage:'https://i.ibb.co/0Fhj5jw/Portrait-Placeholder.png',
   user:{
       id:null,
       username:'',
       name:'',
       lastname:'',
       email:'',
       age:null,
       profilepic:'',
       posts:[],
       token:null
    },
    loginError:null


}



export const user= createSlice({
  name: 'user',
  initialState,
  
  reducers: {
    
    login: (state, action) => {
       {
         state.loginStatus=true,
         state.user=action.payload,
         state.loginError=false
       }
      
        localStorage.setItem('token',JSON.stringify(action.payload.token))
        
  },

    failedLogin:(state,action)=>{
      {
        state.loginStatus=false,
        state.user=initialState,
        state.loginError=action.payload
      }
    },
    logOut:(state,action)=>{
     
           localStorage.clear()
      {
        state.loginStatus=false,
        state.user=initialState,
        state.loginError=null
      }


    },
    updateUser:(state,action)=>{
      state.loginStatus=false,
      state.user=action.payload,
      state.loginError=null
    },

    
  },
})


export const {login, failedLogin, logOut} = user.actions

export default  user.reducer