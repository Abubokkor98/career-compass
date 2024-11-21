import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Clients from '../components/Clients'
import OurTeam from '../components/OurTeam'
import { Helmet } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'

export default function HomeLayout() {
  return (
    <div className='max-w-screen-xl'>
      <Helmet>
        <title>Home | Career Compass</title>
      </Helmet>
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
