import React from 'react'
import { Outlet } from 'react-router-dom'
import { Home } from './components'

function Layout() {
    return (
        <>
        <Home />  
        </>
    )
}

export default Layout