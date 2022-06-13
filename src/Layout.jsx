import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import NavBar from './components/header/navBar/NavBar'
import ReactDOM from "react-dom/client";
import axios from 'axios';
import { useSelector } from 'react-redux';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'


import {
  BrowserRouter,

} from "react-router-dom"



export const Layout = ({children}) => {



  const queryClient=new QueryClient()



  return (
    <QueryClientProvider client={queryClient}>
   <BrowserRouter>
    
    <div className='w-full'>
      
     <NavBar/>
     {children}

    </div>
 

    </BrowserRouter>
    </QueryClientProvider>
  )
}
