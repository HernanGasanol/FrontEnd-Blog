
import React, { useState, useEffect } from 'react'
import {MdOutlineCreateNewFolder} from 'react-icons/md'
import {useForm} from '../hooks/useForm'
import { TagsInput } from "react-tag-input-component";
import {createPost, sendFormPicPost} from '../helpers/postsFetchs'
import { useSelector } from 'react-redux';
import GenericModal from '../components/GenericModal';
import { useNavigate}  from 'react-router-dom';
import Loading from '../components/Loading';

const CreatePostPage = () => {

  const [values, reset, handleInputChange] = useForm({
    title: "",
    desc: "",
  });

  const[isLoading,setIsLoading]=useState()

  const navigate=useNavigate()
  const userState=useSelector(state => state.userState)
   const{user}=userState
   const [isCreated,setIsCreated]=useState({ok:null,msg:''})
 
  const [hashtags, setHashtags] = useState([]);

  const [file, setFile] = useState();

  const { title, desc } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newPost = {
        title,
        desc,
        hashtags,
      };

      if (file) {
        try {
          setIsLoading(true)
          const { data } = await sendFormPicPost(file);
          newPost.picture = data.image.secure_url;
        } catch (e) {
          console.log(e);
        }
      }
      const token=user.token || '';

      console.log(token)

      const { data } = await createPost(newPost,token);

       reset()

    

      if(data.ok){
        setIsLoading(false)
          setIsCreated({ok:true,msg:'post created successfully'})
        
            setTimeout(()=>{
                setIsCreated({ok:false,msg:'post created successfully'})
                navigate("/",{replace:true})  
            },1500)

        }

   
    } catch (e) {
      setIsCreated({ok:true,msg:'post created failed'})
      setTimeout(()=>{
        setIsCreated({ok:false,msg:''})
        navigate("/",{replace:true})  
    },1500)
      console.log(e);
    }
  };


  
  
        
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10  w-full h-full  sm:h-[calc(100vh-50px)]">
      
       {/* post preview */}
      <div className="flex flex-col  w-full h-full  py-14  items-center sm:h-[700px] sm:w-[500px]  ">
        <div className=" flex flex-col gap-6 w-full h-full">
          <div className="h-[90%]  w-full">
            {file && <img src={`${URL.createObjectURL(file)}`} alt="" className="object-cover rounded-sm w-full h-full center" />}
          </div>

          <div className="flex bg-white gap-4  w-full flex-col pl-10 h-full">
            <div class="w-[70%]">
               {!title && <span className="text-lg">Title...</span>}
              <h2 className="text-[30px] uppercase font-medium truncate ..."> {title}</h2>
            </div>

            <div className="flex flex-col w-[50%]">
              {!desc && <span className="text-lg">Description...</span> } 
              <p className="truncate ...">{desc}</p>
            </div>
          </div>
        
        </div>
      </div>

      <form
        className="flex flex-col items-center gap-4 p-10 w-full h-full justify-around border-[1px] sm:h-[400px] sm:w-[300px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-6 sm:gap-4">
          <label htmlFor="title" className="text-sm">
            create post
          </label>
          <input
            type="text"
            placeholder="Title"
             
            autoComplete="off" 
            
            className="pl-2  outline-0 border-b-[1px]"
            name="title"
            id="title"
            value={title}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="desc" className="text-sm"></label>
          <textarea
            type="text"
            placeholder="add a description..."
            name="desc"
            id="desc"
            value={desc}
            className="outline-0 border-[1px] w-[200px] pl-2   resize-none"
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className=" flex flex-wrap w-[200px] overflow-y-auto text  h-[60px] text-sm font-extralight  ">
      
          <TagsInput
            value={hashtags}
            onChange={setHashtags}
            name="fruits"
            placeHolder="hashtags"
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
                autoComplete="off" 
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
               {file && <span className="text-[#40c676]">photo added</span>}
          </div>
          {
            isLoading ? <Loading/> : <button className="border-2 px-8 py-2 bg-black text-white  rounded-sm">
            Submit  </button>
          }
         
        </div>
      </form>
      {isCreated.ok && <GenericModal message={isCreated.msg}/>}
    </div>
  );
}

export default CreatePostPage
