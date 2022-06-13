import React from 'react'

const GenericModal = ({message}) => {
  return (
    <div className='flex justify-center z-40 top-0 items-center fixed backdrop-blur-[3px] w-full h-full bg-[#00000064]'>

        <div className="bg-white flex justify-center rounded-sm w-[400px] h-[300px] items-center">
            <h2 className="text-[#40c676] uppercase">{message}</h2>
        </div>
        
    </div>
  )
}

export default GenericModal