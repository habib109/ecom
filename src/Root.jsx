import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'
import Header from './component/header/Header'

const Root = () => {
    return (
        <div className='allpage'>
            <Header/>
            <Navbar />
            <Outlet />
            {/* <footer>footer</footer> */}
            

        </div>
    )
}

export default Root