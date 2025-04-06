import { X } from 'lucide-react'
import { PuffLoader } from 'react-spinners'
import { Context } from '../../context/Context'
import LoadingBtn from '../../components/LoadingBtn'
import CustomizedTables from '../../components/Table'
import { AnimatePresence, motion } from 'framer-motion'
import noTeachersImg from '../../assets/images/noTeachersImg.svg'
import React, { useContext, useEffect, useState, useRef } from 'react'
import { SearchIcon, ShowAllIcon, SupportIcon } from '../../assets/icons'

const TeachersList = () => {
   const { teachers } = useContext(Context)
   const [search, setSearch] = useState("")
   const [loading, setLoading] = useState(true)
   const [filteredData, setFilteredData] = useState([])
   const [supportOpen, setSupportOpen] = useState(false);
   const [isHidden, setIsHidden] = useState(false);
   const timerRef = useRef(null);

    useEffect(() => {
       const timeout = setTimeout(() => {
           setFilteredData(teachers)
           setLoading(false)
       }, 4000)

        return () => clearTimeout(timeout)
   }, [teachers])

   const handleSupportClick = () => {
        setSupportOpen(true);
        setIsHidden(false);

        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
           setSupportOpen(false);
       }, 3000);
   };

   const handleClose = () => {
       setSupportOpen(false);
       setIsHidden(true);
       if (timerRef.current) clearTimeout(timerRef.current);
   };
   const handleSearch = (e) => {
      const value = e.target.value
       setSearch(value)
       const filtered = teachers.filter(item =>
           item.name.toLowerCase().includes(value.toLowerCase()) ||
           item.email.toLowerCase().includes(value.toLowerCase())
       )
       setFilteredData(filtered)
   }
   if (loading) {
       return (
           <div className="w-full h-screen flex items-center justify-center">
               <PuffLoader size={60} color="#BC8E5BE6" />
           </div>
       )
   }
   return (
       <>
           <div className='flex py-[14px] items-center justify-between'>
               <h2 className='font-medium text-[20px] text-[#4F4F4F]'>Teachers</h2>
               <LoadingBtn title={"Add Teachers"} />
           </div>
           <label className='bg-[#FCFAFA] flex items-center mt-[14px] gap-[16px] w-full p-[16px] rounded-lg'>
               <SearchIcon />
               <input
                   onChange={handleSearch}
                   value={search}
                   className='placeholder:text-[#8A8A8A] outline-none w-full font-medium text-[14px] text-[#4F4F4F]'
                   name='search'
                   type="text"
                   placeholder='Search for a student by name or email'
               />
           </label>
           {filteredData.length === 0 ? (
               <img className='mx-auto mt-[30px] object-contain w-full' src={noTeachersImg} alt="There is no teachers" />
           ) : (
               <div>
                   <CustomizedTables teachers={filteredData} />
               </div>
           )}
           <AnimatePresence mode="wait">
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
                           <div onClick={handleClose} className='w-[181px] py-[21px] px-[24px] bg-[#152259] text-white rounded-[30px] flex justify-between items-center font-semibold text-[14px]'>
                               <span>Close</span>
                               <button className="text-white text-xl leading-none">
                                   <X size={20} />
                               </button>
                           </div>
                       )}
                   </motion.div>
               )}
           </AnimatePresence>
       </>
   )
}

export default TeachersList
