import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { dashboardList } from '../../hooks/useRoute'
import DashboardLayaut from '../../features/DashboardLayaut'
const DashboardRoutes = () => {

  return (
    <DashboardLayaut>
      <Routes>
        {dashboardList.map((item) => (
          <Route
            key={item.id}
            element={item.element}
            path={item.path}
          >
            {item.isNested &&
              item.children.map((child) => (
                <Route
                  key={child.id}
                  element={child.element}
                  path={child.path}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </DashboardLayaut>
  )
}

export default DashboardRoutes