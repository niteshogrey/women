import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import Banner from './Banner'

export default function Layout() {
  return (
    <>
        <Banner />
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}
