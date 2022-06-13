




// FORM ACTUALIZAR 


// {modify &&
//   <form className="flex flex-col items-center justify-around border-[1px] h-[400px] w-[300px]" onSubmit={handleSubmit}>
//     <div className="flex flex-col gap-4">
//       <label htmlFor="title" className="text-sm">
//         Update yout post title
//       </label>
//       <input
//         type="text"
//         placeholder="Title"
//         className="pl-2  outline-0 border-b-[1px]"
//         name="title"
//         id="title"
//         value={title}
//         onChange={handleInputChange}
//       />
//     </div>

//     <div className="flex flex-col gap-2 ">
//       <label htmlFor="desc" className="text-sm">
//         Update description
//       </label>
//       <textarea
//         type="text"
//         placeholder="add a description..."
//         name="desc"
//         id="desc"
//         className="outline-0 border-[1px] w-[200px] pl-2   resize-none"
//         value={desc}
//         onChange={handleInputChange}
//       ></textarea>
//     </div>

//     <div className=" flex flex-wrap w-[200px] overflow-y-auto text  h-[60px] text-sm font-extralight  ">
  
//   <TagsInput
//     value={hashtags}
//     onChange={setHashtags}
//     name="fruits"
//     placeHolder="hashtags"
//   />
// </div>

//     <div className="flex flex-col gap-8">
//       <div className="flex gap-2">
//         <label htmlFor="fileInput" className="text-sm">
//           <MdOutlineCreateNewFolder class="text-[1.25rem]" />
//         </label>{" "}
//         <span className="text-sm">Update post picture</span>
//         <input type="file" id="fileInput" className="hidden" name="file" onChange={(e)=> setFile(e.target.files[0])} />
//       </div>

//       <button className="border-2 px-8 py-2 bg-black text-white  rounded-sm">
//         Submit
//       </button>
//     </div>
//   </form> }