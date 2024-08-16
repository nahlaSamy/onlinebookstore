import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../../SharedModule/components/Footer/Footer';
import NavBar from '../../../SharedModule/components/NavBar/NavBar';
export default function MasterLayout() {
  return (
    <div>
      <div className="">
        <NavBar />
      </div>
      <Outlet></Outlet>
      <div className='pt-3'>
        <Footer />
      </div>
    </div>
  )
}
