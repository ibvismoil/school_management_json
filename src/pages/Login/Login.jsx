import React, { useContext } from 'react'
import Input from '../../components/Input'
import LoadingBtn from '../../components/LoadingBtn'
import toast, { Toaster } from 'react-hot-toast'
import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'
import { PATH } from '../../hooks/usePath'


const Login = () => {
  const { users, setToken } = useContext(Context);
  function handleSubmitLogin(e) {
    e.preventDefault();

    const data = {
      login: e.target.user.value,
      password: e.target.password.value,
    };
    const logUser = users.some(
      (item) => item.name == data.login && item.password == data.password
    );
    if (logUser) {
      setTimeout(() => {
        setToken(data);
      }, 1000);
      toast.success("Login successful!");
    } else {
      toast.error("Invalid username or password.");
    }
  }
  return (
    <div className='bg-[#FCFAFA] flex justify-center items-center h-[100vh]'>
      <Toaster position="top-center" />
      <div>
        <h2 className='text-[#4F4F4F] font-[Kumbh Sans] mb-[53px] text-center text-[36px] font-semibold'>Welcome, Log into you account</h2>
        <div className='mx-auto max-w-[512px] text-center bg-white pt-[72px] px-[130px] pb-[39px]'>
          <h3 className='font-medium text-[16px] leading-[25px] text-[#4F4F4F]'>It is our great pleasure to have you on board! </h3>
          <form onSubmit={handleSubmitLogin} className='flex font-[Kumbh_Sans] flex-col gap-[14px] mt-[14px]'>
            <Input type={"text"} placeholder={"Enter your Login"} name={"user"} />
            <Input type={"password"} placeholder={"Enter Password"} name={"password"} />
            <LoadingBtn title={"Login"} />
          </form>
          <Link to={PATH.register} className='text-[#2D88D4] inline-block mt-[14px]'>Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login