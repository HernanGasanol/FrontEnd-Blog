import Home from "./pages/Home";
import SinglePostPage from "./pages/SinglePostPage";
import CreatePost from "./pages/CreatePostPage";
import UserProfilePage from "./pages/UserProfilePage";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import EditProfile from "./pages/EditProfilePage";
import { SwitchNavModal } from "./redux/navReducers";
import jwtDecode from "jwt-decode";
import { login } from "./redux/userState";
import { persistUser } from "./helpers/authServices";
import { getAllUsers, getUserById } from "./helpers/usersFetchs";
import axios from "axios";
import { useQuery } from "react-query";
import { getAllPosts } from "./helpers/postsFetchs";
import { setPostsReducer } from "./redux/postsState";
import { setAllUsers } from "./redux/usersState";
import HashtagsPage from "./pages/HashtagsPage";


const App = () => {
 
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;
  
  const userState = useSelector((state) => state.userState);
  const { loginStatus, user } = userState;






//   const{data,error,isLoading,isFetching}=useQuery(["posts"],getAllPosts);
  
//   if(data){ 
//     const {posts}=data.data
//     dispatch(setPostsReducer(posts));
//  }
// console.log(data)


useEffect(() => {
  const token = JSON.parse(localStorage.getItem("token"));

  if (!loginStatus && token) {
    const payload = jwtDecode(token);

    persistUser(payload.id, dispatch, token);
  } else {
    return;
  }
}, []);
   
    
 



  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/p/:id" element={<SinglePostPage />} />
      <Route path="/:username" element={<UserProfilePage />} />
      <Route path="/edit/profile/:username" element={<EditProfile />} />
      <Route path="/tag/:hashtags" element={<HashtagsPage />} />


  
    </Routes>
  );
};

export default App;
