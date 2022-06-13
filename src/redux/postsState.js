import { createSlice } from '@reduxjs/toolkit'





const initialState={
  postsData:[],
  postsQueryData:[],
  postById:[]
}



export const PostsSlice = createSlice({
  name: 'Posts',
  initialState,
  
  reducers: {
    setPostsReducer: (state, action) => {
      {
        
        state.postsData=action.payload
      }
    },

    setPostsByQuery:(state,action)=>{
       {
          state.postsQueryData=action.payload
       } 
     
    },
    setPostById:(state,action)=>{
      {
         state.postById=action.payload
      }
     
    },
 
    deletePost:(state,action)=>{
      {
         state.postById=action.payload
      }
     
    }


  },
})


export const {setPostsReducer , setPostsByQuery, setPostById } = PostsSlice.actions

export default PostsSlice.reducer