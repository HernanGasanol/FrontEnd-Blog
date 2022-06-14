import  { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { deletePost, getPostById, sendFormUpdatePicPost, updatePost} from '../helpers/postsFetchs'
import { useDispatch , useSelector} from 'react-redux'
import {MdOutlineCreateNewFolder} from 'react-icons/md'
import PostSinglePost from '../components/singlePostComponents/PostSinglePost'
import { useForm } from '../hooks/useForm'
import { TagsInput } from 'react-tag-input-component'
import GenericModal from '../components/GenericModal'
import axios from 'axios'
import Loading from '../components/Loading'



const SinglePostPage= () => {





  
  const dispatch=useDispatch()
  const [isLoading, setIsLoading]=useState()

  const userState=useSelector(state => state.userState)
  
  //user logged
  const {loginStatus,user , placeholderImage}=userState
  
  const [modify,setModify]=useState()
  
  const [isUpdated,setIsUpdated]=useState({ok:false, msg:''})
  const [isDeleted,setIsDeleted]=useState()
  const navigate=useNavigate()  
  const location=useLocation()
  const path=location.pathname.split('/')[2]
 
  
  const [post, setPostByQuery]=useState()


      const validate=(postUserUsername,userLoggedUsername)=>{
        if(postUserUsername=== userLoggedUsername){
          setModify(true)
        }else{
          setModify(false)
        }
      }

      const fetchPostById=async()=>{
          try{
            const {data}=await getPostById(path)
           
            setPostByQuery(data.post)
           
            validate(data.post.user.username,user.username)
            
          }catch(e){
              console.log(e)
          }
      }




      useEffect(()=>{
        fetchPostById()
      },[loginStatus,path])


 
   //update states el

  const [values, reset, handleInputChange] = useForm({
    title: "",
    desc: "",
  });
 
  const [hashtags, setHashtags] = useState([]);

  const [file, setFile] = useState();

  const { title, desc } = values;
 

  //comprueba si el usuario esta logueado y el post le pertenece en caso contrario solo muestra el post
  
  


  //update
  const handleSubmit=async(e)=>{
    e.preventDefault()

    try {
      const updateFormPost = {
        title,
        desc,
        hashtags,
      };

      if (file) {
        try {
          setIsLoading(true)
          const { data } = await sendFormUpdatePicPost(file);
          updateFormPost.picture = data.image.secure_url;
        } catch (e) {
          console.log(e);
        }
      }
      const token=user.token || '';



      const { data } = await updatePost(updateFormPost,token,path);

      if(data.ok){
        
        setIsLoading(false)
        //id image
        const publicIdImage=post.picture.split('/')[7].split('.')[0]  
  
        setIsUpdated({ok:true, msg:'successfully updated user'})
        const res= await axios.delete(`${import.meta.env.VITE_BASE_URL}/upload/${publicIdImage}`)
         
        
        fetchPostById(path)
        validate(user)
       
        setTimeout(()=>{
            setIsUpdated({ok:false,msg:''})  
        },1000)


     
      }



    } catch (e) {
      console.log(e);
    }
  }

  const handleDeletePost=async(e)=>{
    const token=user.token || ''; 
    try {
          setIsLoading(true)
          const {data}=await deletePost(token,path)
  
        

          if(data.ok){
             setIsLoading(false)
          //id image
          if(post.picture){
             const publicIdImage=post.picture.split('/')[7].split('.')[0]  
         
         
          setIsUpdated({ok:true , msg:'post deleted successfully'})
         
          const res= await axios.delete(`${import.meta.env.VITE_BASE_URL}/upload/${publicIdImage}`)
       }
      //  fetchPostById(path)
          setTimeout(()=>{
            setIsUpdated({ok:false,msg:''})  
             navigate("/",{replace:true})
        },1500)

       
        }

    } catch (error) {
      console.log(error)
    }

  }

  


 
  return (
    <>
      <div className="flex flex-col gap-8 items-center sm:flex-row sm:justify-evenly  h-full relative top-10">
        {post && (
          <PostSinglePost
            post={post}
            file={file}
            title={title}
            desc={desc}
            placeholderImage={placeholderImage}
          />
        )}

        {modify && (
          <form
            className="flex flex-col items-center justify-around border-[1px] h-[400px] w-[300px]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-4">
              <label htmlFor="title" className="text-sm">
                Update yout post title
              </label>
              <input
                type="text"
                placeholder="Title"
                className="pl-2  outline-0 border-b-[1px]"
                name="title"
                autoComplete="off" 
                id="title"
                value={title}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label htmlFor="desc" className="text-sm">
                Update description
              </label>
              <textarea
                type="text"
                placeholder="add a description..."
                name="desc"
                id="desc"
                
                className="outline-0 border-[1px] w-[200px] pl-2   resize-none"
                value={desc}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className=" flex flex-wrap w-[200px] overflow-y-auto text  h-[60px] text-sm font-extralight  ">
              <TagsInput
                value={hashtags}
                onChange={setHashtags}
                name="hashtags"
                placeHolder="hashtags"
              />
            </div>

            <div className="flex flex-col gap-8">
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
              {file && <span className="text-[#40c676]">photo added</span>}
              <div className="flex gap-2">
                {isLoading ? (
                  <Loading />
                ) : (
                  <>
                    <button className="border-2 px-8 py-2 bg-black text-white  rounded-sm">
                      Submit
                    </button>
                    <button
                      className="border-2 px-4 py-2 shadow-  text-black rounded-sm"
                      onClick={handleDeletePost}
                    >
                      delete post
                    </button>
                  </>
                )}
              </div>
            </div>
          </form>
        )}

        {isUpdated.ok && <GenericModal message={isUpdated.msg} />}
      </div>
    </>
  );
}

export default SinglePostPage









