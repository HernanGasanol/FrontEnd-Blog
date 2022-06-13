import { createSlice } from '@reduxjs/toolkit'





const initialState={
  allUsers:{},
  userByQuery:{},
  userById:{}
}



export const users = createSlice({
  name: 'users',
  initialState,
  
  reducers: {
    setAllUsers: (state, action) => {
      {
        
        state.allUsers=action.payload
      }
    },

    setUsersByQuery:(state,action)=>{
       
      {
          state.userByQuery=action.payload
       } 
     
    },
    setUserById:(state,action)=>{
      {
         state.userById=action.payload
      }
     
    },
    updateUser:(state,action)=>{
      {
         state.userById=action.payload
      }
     
    },

 


  },
})


export const {setAllUsers , setUsersByQuery, setUserById, updateUser} =users.actions

export default users.reducer