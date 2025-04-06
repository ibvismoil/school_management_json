import React, { useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import LoadingBtn from '../../components/LoadingBtn'
import Input from '../../components/Input'
import { PATH } from '../../hooks/usePath'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../context/Context'
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate()
  const { users } = useContext(Context)
  function handleSubmitRegister(e) {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      name: e.target.username.value,
      password: e.target.password.value
    }
    const newUser = users.some(item => item.name == data.name || data.email == item.email)
    if (newUser) {
      toast.error("this user already exists")
    } else {
      axios.post("http://localhost:3000/users", data)
      navigate(-1)
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }

  return (
    <div className='bg-[#FCFAFA] flex justify-center items-center h-[100vh]'>
      <Toaster position="top-center" />
      <div>
        <h2 className='text-[#4F4F4F] mb-[53px] text-center text-[36px] font-semibold'>It is our great pleasure to have you on board! </h2>
        <div className='mx-auto max-w-[512px] text-center bg-white pt-[72px] px-[130px] pb-[39px]'>
          <h3 className='font-medium text-[16px] leading-[25px] text-[#4F4F4F]'>It is our great pleasure to have you on board!  </h3>
          <form onSubmit={handleSubmitRegister} className='flex flex-col gap-[14px] mt-[14px]'>
            <Input type={"email"} placeholder={"Enter your Email"} name={"email"} />
            <Input type={"text"} placeholder={"Create your Login"} name={"username"} />
            <Input type={"password"} placeholder={"Create your Password"} name={"password"} />
            <LoadingBtn title={"Sign up"} />
          </form>
          <Link to={PATH.login} className='text-[#2D88D4] inline-block mt-[14px]'>Sign in</Link>
        </div>
      </div>
    </div>
  )
}

export default Register