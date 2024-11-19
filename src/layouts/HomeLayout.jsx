import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Slider from '../components/Slider'

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
