import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context'
import { useParams } from 'react-router-dom'
import { Icon1, NotificationIcon, Phone } from '../../assets/icons'
import LogginOutBtn from '../../components/LogginOutBtn'
import { PuffLoader } from 'react-spinners'

const SinglePage = () => {
  const { singlePage: id } = useParams()
  const { teachers } = useContext(Context)

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const teacherData = teachers.filter(item => item.id === id)
      setData(teacherData)
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [id, teachers])

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <PuffLoader size={60} color="#BC8E5BE6" />
      </div>
    )
  }

  return (
    <div className='pl-[34px] pr-[104px]'>
      <div className='pt-[34px] gap-[15px] pb-[21px] flex items-center justify-end'>
        <NotificationIcon />
        <LogginOutBtn type={"default"} extraClass={"!border-none !shadow-none"} title={"Log out"} />
      </div>

      {data?.map(item => (
        <div key={item.id} className="max-w-4xl mt-[66px] mx-auto p-6">
          <div className="grid md:grid-cols-[300px_1fr] gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 rounded-full overflow-hidden mb-4">
                <img src={item.avatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-2xl font-semibold mb-2">{item.name}</h1>
              <p className="text-gray-600 mb-6">{item.email}</p>

              <div className="flex gap-4">
                <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Icon1 />
                </button>
                <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="w-6 h-6 border-2 border-gray-600 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-gray-600 rounded-full translate-x-1 -translate-y-1" />
                  </span>
                </button>
                <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Phone />
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-gray-600 leading-relaxed">{item.about}</p>
              </section>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Subject</h3>
                  <p className="text-gray-600">{item.subject}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Class</h3>
                  <p className="text-gray-600">{item.class}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Age</h3>
                  <p className="text-gray-600">{item.age}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Gender</h3>
                  <p className="text-gray-600">{item.gender}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SinglePage
