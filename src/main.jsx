import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/MainRouter.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>

        <QueryClientProvider client={queryClient}>
          <div className='max-w-8xl mx-auto'>
            <RouterProvider router={router}></RouterProvider>
          </div>
        </QueryClientProvider>

      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
