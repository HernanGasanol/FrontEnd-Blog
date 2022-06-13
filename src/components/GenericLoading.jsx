import React from 'react'

const GenericLoading = () => {
  return (
    <div className="flex items-center absolute top-0  justify-center   gap-2 h-full w-full ">
      <div
        className="spinner-border animate-spin border-[#333] border-t-teal-50 inline-block w-[40px] h-[40px] border-4 rounded-full"
        role="status"
      ></div>
    </div>
  );
}

export default GenericLoading