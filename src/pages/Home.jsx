import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import GenericLoading from '../components/GenericLoading'
import Header from '../components/header/Header'
import Loading from '../components/Loading'
import Posts from '../components/posts/Posts'
import PostPresentation from '../components/recomendations/PostPresentation'
import SideBar from "../components/sidebar/SideBar";
import { getAllPosts } from '../helpers/postsFetchs'
import { SwitchNavModal } from '../redux/navReducers'
import { setPostsReducer } from '../redux/postsState'


const Home = () => {
  const dispatch = useDispatch();
  const {
    data: postsData,
    error,
    isLoading,
    isFetching,
  } = useQuery(["posts"], getAllPosts);

  if (postsData) {
    const { posts } = postsData.data;
    dispatch(setPostsReducer(posts));
  }

  return (
    <>
      {postsData ? (
        <div className="flex flex-col gap-4   w-full h-full  ">
          <div className="grid grid-cols-1 h-full  sm:grid-cols-2 w-full mt-8  ">
            <SideBar />
            {postsData && <Posts posts={postsData.data.posts} />}
          </div>
        </div>
      ) : (
         <GenericLoading/>
      )}
    </>
  );
};

export default Home