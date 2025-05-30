import React from 'react'
import SideTeacher from './SideTeacher'
import CenterTeacher from './CenterTeacher'
import NavTeacher from './NavTeacher'
import { Outlet } from 'react-router-dom'

const TeacherDashboard = ({children}) => {
  return (
  <>
  <div style={{height:"100vh",width:"100%"}} className='d-flex'>
    <div className='sideTeacher_dashboard' >
        <SideTeacher/>
    </div>
    <div className='centerTeacher_dashboard w-100' style={{flexGrow:"1"}}>
      <NavTeacher/>
     <div className='main-container'>
          <Outlet />
        </div>
    </div>

  </div>
  </>
  )
}

export default TeacherDashboard