import React from 'react'


const Header = () => {
  return (
     <header className="flex justify-center items-center w-full  select-none">
          <div className="flex justify-center  bg-center items-center mx-auto bg-cover bg-no-repeat  w-full  h-[80vh] bg-fixed bg-[url('https://images.pexels.com/photos/11612904/pexels-photo-11612904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')]">
                <div className="w-full flex justify-center items-center h-full relative top-0 backdrop-blur-sm">
                         
                         <div className="flex flex-col gap-6 text-white ">
                              <h1 className="text-[3.75rem]   sm:text-[5.625rem] font-serif font-bold select-none">App Blog</h1>
                              
                               <div className="flex flex-col self-center gap-4 sm:gap-6">
                                    <p className="font-light text-md sm:text-[1.25rem]">comparte experiencias</p>
                                    <button className=" px-5 py-[0.3125rem] sm:w-[12.5rem] text-sm bg-black ">comenzar</button>
                              </div>
                              {/* <span className=" text-sm font-light self-center">By @hernangasanol</span> */}
                         </div>
                </div>
          </div>
     
      
     </header>
  )
  
}

export default Header



