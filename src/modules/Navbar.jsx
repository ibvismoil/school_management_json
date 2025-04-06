import React from 'react'
import { PATH } from '../hooks/usePath'
import { NavLink } from 'react-router-dom'
import { ChevronRight } from 'lucide-react';
import Icon from '../assets/images/UdemiIcon.png'
import { BillingIcon, DashboardIcon, ExamsIcon, FeaturesIcon, SettingsIcon, StudentsIcon, NEWico } from '../assets/icons'

const Navbar = () => {
    const NavList = [
        {
            id:1,
            title: "Dashboard",
            icon: <DashboardIcon/>,
            path: PATH.dashboard
        },
        {
            id:2,
            title: "Teachers",
            icon: <DashboardIcon/>,
            path: PATH.teachers
        },
        {
            id:3,
            title: "Students",
            icon: <StudentsIcon/>,
            path: PATH.students
        },
        {
            id:4,
            title: "Billing",
            icon: <BillingIcon/>,
            path: PATH.billing
        },
        {
            id:5,
            title: "Settings and profile",
            icon: <SettingsIcon/>,
            path: PATH.settings
        },
        {
            id:6,
            title: "Exams",
            icon: <ExamsIcon/>,
            path: PATH.exams
        },
    ]
  return (
    <nav className='bg-[#152259] h-[100vh] overflow-y-auto w-[20%]'>
      <img src={Icon} width={65} className='mx-auto disallow mt-[26px]' height={65} alt="Site logo" />
      <h3 className='text-center text-white mt-[22px] text-[14px] mb-[27px] font-semibold'>Udemy Inter. school</h3>
      <div className='flex gap-[9px] pt-[16px] border-t-[1px] border-gray-100 flex-col mx-auto'>
          {NavList.map(item => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => {
                return `
                  flex w-[232px] items-center justify-between px-[20px] py-[14px] mx-auto rounded-[12px]
                  font-semibold text-[16px] transition-all duration-300 
                  ${isActive ? 'bg-[#4DA1EC] text-white' : 'text-white'}
                `;
              }}
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-[12px]">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  {isActive && <ChevronRight size={20} />}
                </>
              )}
            </NavLink>
          ))}
        <NavLink
          className={({ isActive }) =>
            `flex w-[232px] duration-400 mt-[114px] rounded-md mx-auto algin-center items-center gap-[16px] px-[16px] py-[12px] text-[14px] font-semibold ${isActive ? 'bg-[#1D3A4F] text-[#FFB84D]' : 'text-white'}`
          }
          to={PATH.features}
        >
          <FeaturesIcon /><span>Features</span> <NEWico/>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar