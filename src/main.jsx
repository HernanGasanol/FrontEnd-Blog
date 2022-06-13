import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Layout } from './Layout'
import store from './redux/store'
import { Provider } from 'react-redux'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'
// import "swiper/css/bundle";

ReactDOM.createRoot(document.getElementById('root')).render(

<Provider store={store}>
      <Layout>
          <App />
      </Layout>
 </Provider> 
 

)
