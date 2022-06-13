import { createSlice } from '@reduxjs/toolkit'


const initialState= {
  isRegister:false,
  userRegistered:null,
  error:null,
  modalError:false
}

export const registerState = createSlice({
  name: 'register',
  initialState,
  
  reducers: {
    
    register: (state, action) => {
        { 
         state.isRegister=true,
         state.userRegistered=action.payload,
         state.error=null,
         state.modalError=false
        }
  },
    failRegister:(state,action)=>{
        {
          state.isRegister=false,
          state.userRegistered=null,
          state.error=action.payload,
          state.modalError=true
        }
    }


  },
})


export const {register,failRegister} = registerState.actions

export default registerState.reducer