import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Clients from '../components/Clients'
import OurTeam from '../components/OurTeam'

export default function HomeLayout() {
  return (
    <div className='max-w-screen-xl'>
        {/* navbar */}
        <Navbar></Navbar>
        <Slider></Slider>

        
        {/* main content */}
        <Outlet></Outlet>
        <Clients></Clients>
        <OurTeam></OurTeam>
        {/* footer */}
        <Footer></Footer>
        
    </div>
  )
}
