import React, { useState, useRef } from 'react'
import {
  AddAdminIcon,
  AddClassesIcon,
  AddStudentsIcon,
  NotificationIcon,
  ShowAllIcon,
  SupportIcon
} from '../../assets/icons'
import LogginOutBtn from '../../components/LogginOutBtn'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const Dashboard = () => {
  const [supportOpen, setSupportOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const timerRef = useRef(null)

  const handleSupportClick = () => {
    setSupportOpen(true)
    setIsHidden(false)

    if (timerRef.current) clearTimeout(timerRef.current)

    timerRef.current = setTimeout(() => {
      setSupportOpen(false)
    }, 3000)
  }

  const handleClose = () => {
    setSupportOpen(false)
    setIsHidden(true)
    if (timerRef.current) clearTimeout(timerRef.current)
  }

  return (
    <div className='relative'>
      <div className='px-[125px] flex items-center justify-between bg-[#FCFAFA]'>
        <div className='pt-[34px] pb-[21px] flex flex-col'>
          <span className='text-[#424242] font-medium text-[16px]'>Learn how to launch faster</span>
          <span className='text-[16px] text-[#424242] font-normal'>
            Watch our webinar for tips from our experts and get a limited time offer.
          </span>
        </div>
        <div className='flex gap-[48px] items-center'>
          <NotificationIcon />
          <LogginOutBtn type='primary' title='Log out' />
        </div>
      </div>

      <h2 className='text-[#4F4F4F] font-semibold text-[40px] mt-[15px] ml-[-200px] text-center'>
        Welcome to your dashboard, Udemy school
      </h2>
      <p className='text-[#4F4F4F] text-[24px] font-semibold mt-[20px] text-start ml-[232px] mb-[68px]'>
        Uyo/school/@teachable.com
      </p>

      <ul className='flex gap-[51px] font-[Kumbh_Sans] algin-center flex-col ml-[215px]'>
        <li className='flex items-start gap-[20px] pr-[120px]'>
          <div className='bg-[#EFF3FA] p-[6px] rounded-[8px] inline-block'>
            <AddAdminIcon />
          </div>
          <div className='w-[583px]'>
            <h3 className='font-medium mb-[16px] text-[24px] text-[#4F4F4F]'>Add other admins</h3>
            <p className='text-[#4F4F4F] font-normal text-[14px]'>
              Create rich course content and coaching products for your students.
              When you give them a pricing plan, they’ll appear on your site!
            </p>
          </div>
        </li>

        <li className='flex items-start gap-[20px] pr-[120px]'>
          <div className='bg-[#EFF3FA] p-[6px] rounded-[8px] inline-block'>
            <AddClassesIcon />
          </div>
          <div className='w-[583px]'>
            <h3 className='font-medium mb-[16px] text-[24px] text-[#4F4F4F]'>Add classes</h3>
            <p className='text-[#4F4F4F] font-normal text-[14px]'>
              Create rich course content and coaching products for your students.
              When you give them a pricing plan, they’ll appear on your site!
            </p>
          </div>
        </li>

        <li className='flex items-start gap-[20px] pr-[120px]'>
          <div className='bg-[#EFF3FA] p-[6px] rounded-[8px] inline-block'>
            <AddStudentsIcon />
          </div>
          <div className='w-[583px]'>
            <h3 className='font-medium mb-[16px] text-[24px] text-[#4F4F4F]'>Add students</h3>
            <p className='text-[#4F4F4F] font-normal text-[14px]'>
              Create rich course content and coaching products for your students.
              When you give them a pricing plan, they’ll appear on your site!
            </p>
          </div>
        </li>
      </ul>

      <AnimatePresence mode='wait'>
        {!isHidden && (
          <motion.div
            key={supportOpen ? 'open' : 'closed'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className='fixed bottom-[50px] right-[120px]'
          >
            {!supportOpen ? (
              <button
                onClick={handleSupportClick}
                className='flex items-center justify-between px-[24px] bg-[#152259] shadow-[#152259]/50 shadow-lg w-[181px] py-[21px] font-semibold rounded-[30px] text-[14px] text-white transition-all duration-300 hover:scale-105'
              >
                <div className='flex items-center gap-2'>
                  <SupportIcon />
                  <span>Support</span>
                </div>
                <ShowAllIcon />
              </button>
            ) : (
              <div
                onClick={handleClose}
                className='w-[181px] py-[21px] px-[24px] bg-[#152259] text-white rounded-[30px] flex justify-between items-center font-semibold text-[14px]'
              >
                <span>Close</span>
                <button className='text-white text-xl leading-none'>
                  <X size={20} />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Dashboard
