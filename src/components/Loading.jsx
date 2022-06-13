import React from 'react'


const Loading = () => {
  return (
    <div className="flex items-center gap-2 justify-center bg-black  border-[0.0625rem] py-2 px-4 h-[50px] w-[200px] ">
    <div className="spinner-border animate-spin border-[#333] border-t-teal-50 inline-block w-[30px] h-[30px] border-4 rounded-full" role="status">
    <span className="hidden">Loading...</span>
  </div>
    <span className="text-white">Procesing...</span>
  </div>
  )
}

export default Loading