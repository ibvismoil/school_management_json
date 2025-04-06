import React from 'react'
import Navbar from '../modules/Navbar'

const DashboardLayaut = ({children}) => {
  return (
    <div className='flex'>
        <Navbar/>
        <div className='w-[80%] h-[100vh] overflow-auto'>{children}</div>
    </div>
  )
}

export default DashboardLayaut