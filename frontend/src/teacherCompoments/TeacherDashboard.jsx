import React from 'react'
import SideTeacher from './SideTeacher'
import CenterTeacher from './CenterTeacher'

const TeacherDashboard = () => {
  return (
  <>
  <div style={{height:"100vh",width:"100%"}} className='d-flex'>
    <div className='sideTeacher_dashboard' style={{height:"100vh",width:"280px"}}>
        <SideTeacher/>
    </div>
    <div className='centerTeacher_dashboard' style={{flexGrow:"1"}}>
        <CenterTeacher/>
    </div>

  </div>
  </>
  )
}

export default TeacherDashboard