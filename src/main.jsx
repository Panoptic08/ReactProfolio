import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Learnwithme from './components/learnwithme.jsx'
import Layout from './Layout.jsx'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(

<Route path='/' element={<Layout />}>
<Route path="" element={<Home />} />
<Route path="/lwm" element={<Learnwithme />} />
</Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider  router={router}/>  
  </React.StrictMode>
);