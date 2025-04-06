import React from 'react'
import user from '../assets/images/user.webp'
import { useNavigate } from 'react-router-dom'

const CustomizedTables = ({ teachers }) => {
  const navigate = useNavigate()
  return (
    <div className="overflow-hidden rounded-lg">
      <table className="w-full mt-[11px]">
        <thead className="bg-white">
          <tr>
            <th className="px-6 py-3 text-left text-[12px] font-bold text-[#424242]">Name</th>
            <th className="px-6 py-3 text-left text-[12px] font-bold text-[#424242]">Subject</th>
            <th className="px-6 py-3 text-left text-[12px] font-bold text-[#424242]">Class</th>
            <th className="px-6 py-3 text-left text-[12px] font-bold text-[#424242]">Email address</th>
            <th className="px-6 py-3 text-left text-[12px] font-bold text-[#424242]">Gender</th>
          </tr>
        </thead>
        <tbody className="bg-white cursor-pointer">
          {teachers.map((teacher, index) => (
            <tr onClick={() => navigate(teacher.id)
            } key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#EBF6FF80]"}>
              <td className="px-6 py-4 ">
                <div className="flex items-center">
                  <img src={teacher.avatar ? teacher.avatar : user} alt="teacher-logo" className="w-10 h-10 rounded-full" />
                  <div className="ml-4">
                    <div className="text-[12px] font-medium text-gray-900">{teacher.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4  text-[12px] font-medium text-[#4F4F4F]">{teacher.subject}</td>
              <td className="px-6 py-4  text-[12px] font-medium text-[#4F4F4F]">{teacher.class}</td>
              <td className="px-6 py-4  text-[12px] font-medium text-[#4F4F4F]">{teacher.email}</td>
              <td className="px-6 py-4  text-[12px] font-medium text-[#4F4F4F]">{teacher.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomizedTables