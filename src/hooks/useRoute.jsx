import React from "react"
import { PATH } from "./usePath"
import Login from "../pages/Login/Login"
import Register from "../pages/Login/Register"
import Features from "../pages/Dashboard/Features"
import AddTeacher from "../pages/Dashboard/AddTeacher"
import SinglePage from "../pages/Dashboard/SinglePage"
import TeachersList from '../pages/Dashboard/teachersList'
import { Billing, Dashboard, Exams, Settings_and_profile, Students, Teachers } from "../pages/Dashboard"

export const dashboardList = [
    {
        id: 1,
        element: <Dashboard />,
        path: PATH.dashboard,
        isNested: false,
        children: []
    },
    {
        id: 2,
        element: <Teachers />,
        path: PATH.teachers,
        isNested: true,
        children: [
            {
                id: 7,
                element: <TeachersList />,
                path: PATH.teachers,
            },
            {
                id: 8,
                element: <AddTeacher />,
                path: PATH.addteacher,
            }
        ]
    },
    {
        id: 3,
        element: <Students />,
        path: PATH.students,
        isNested: false,
        children: []
        
    },
    {
        id: 4,
        element: <Billing />,
        path: PATH.billing,
        isNested: false,
        children: []
    },
    {
        id: 5,
        element: <Settings_and_profile />,
        path: PATH.settings,
        isNested: false,
        children: []
    },
    {
        id: 6,
        element: <Exams />,
        path: PATH.exams,
        isNested: false,
        children: []
    },
    {
        id: 9,
        element: <SinglePage />,
        path: PATH.singlePage,
        isNested: false,
        children: []
    },
    {
        id: 10,
        element: <Features />,
        path: PATH.features,
        isNested: false,
        children: []
    },
    

]

export const loginList = [
    {
        id: 1,
        path: PATH.login,
        element: <Login />
    },
    {
        id: 2,
        path: PATH.register,
        element: <Register />
    }
]