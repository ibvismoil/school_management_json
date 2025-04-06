import React from 'react'
import { NotificationIcon } from '../../assets/icons'
import LogginOutBtn from '../../components/LogginOutBtn'
import { Outlet } from 'react-router-dom'


const Teachers = () => {
  
  return (
    <>
      <div className='pl-[38px] pr-[104px]'>
        <div className=' pt-[34px] gap-[15px] pb-[21px] flex items-center justify-end'>
          <NotificationIcon />
          <LogginOutBtn type={"default"} extraClass={"!border-none !shadow-none"} title={"Log out"} />
        </div>
        <Outlet/>
      </div>
    </>
  )
}

export default Teachers