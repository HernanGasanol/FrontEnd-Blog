import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import GenericLoading from '../components/GenericLoading'
import Loading from '../components/Loading'
import Posts from '../components/posts/Posts'
import PostPresentation from '../components/recomendations/PostPresentation'
import SideBar from "../components/sidebar/SideBar";
import { getAllPosts } from '../helpers/postsFetchs'
import { SwitchNavModal } from '../redux/navReducers'
import { setPostsReducer } from '../redux/postsState'


const Home = () => {
  const dispatch = useDispatch();
  const postsState=useSelector(state => state.postsState.postsData)

  const {
    data: posts,
    error,
    isLoading,
    isFetching,
  } = useQuery(["posts",postsState],async()=> {
    try {
     const data=await getAllPosts()
 
    if (data) {
    const { posts } = data;
    dispatch(setPostsReducer(posts));
    return posts

    }
    } catch (e) {
      console.log(e)
    }


   });



  return (
    <>
      {posts ? (
        <div className="flex flex-col gap-4   w-full h-full  ">
          <div className="grid grid-cols-1 h-full  sm:grid-cols-2 w-full mt-8  ">
              <SideBar /> 
              {posts && <Posts posts={posts} />}
          </div>
        </div>
      ) : (
         <GenericLoading/>
      )}
    </>
  );
};

export default Home