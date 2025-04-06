import React, { useContext, useState } from 'react'
import './App.css'
import DashboardRoutes from './routes/Dashboard/DashboardRoutes'
import LoginRoutes from './routes/Login/LoginRoutes'
import { Context } from './context/Context'

const App = () => {
const {token} = useContext(Context)
  if (token) {
    return <DashboardRoutes/>
  }
  else{
    return <LoginRoutes/>
  }   
}

export default App