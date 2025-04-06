import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { loginList } from '../../hooks/useRoute'

const LoginRoutes = () => {
  return (
    <Routes>
        {loginList.map(item=> <Route key={item.id} element={item.element} path={item.path}/>)}
    </Routes>
  )
}

export default LoginRoutes