import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

export default function HomeLayout() {
  return (
    <div className='max-w-screen-xl'>
        {/* navbar */}
        <Navbar></Navbar>
        <Slider></Slider>

        
        {/* main content */}
        <Outlet></Outlet>
        {/* footer */}
        <Footer></Footer>
        
    </div>
  )
}
