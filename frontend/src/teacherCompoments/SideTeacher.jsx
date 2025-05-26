import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { IoBookOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

const SideTeacher = () => {
  return (
    <>
    <div className='h-100 w-100 bg-primary' style={{borderTopRightRadius:"12px",borderBottomRightRadius:"12px",paddingTop:"11px"}}>
        <h3 className='m-0 mb-0' style={{fontWeight:"500",color:"white",textAlign:"center"}}>E-Learn</h3>
        <p className='fst-italic' style={{fontWeight:"500",fontSize:"14px",color:"white",textAlign:"center"}} >Learn From Home</p>

        <ul className=' mt-5 d-flex gap-3 flex-column' style={{padding:"0 0 0 17px "}}>
<li className='d-flex align-items-center w-100  gap-2  li_color' >
<RxDashboard  className='icon_color fs-4' />
Dashboard
</li>
<li className='d-flex align-items-center w-100  gap-2  li_color' >
<IoBookOutline  className='icon_color fs-3' />
Courses
</li>
<li className='d-flex align-items-center w-100  gap-2  li_color' >
<CiCreditCard1  className='icon_color fs-2' />
Transaction
</li>
<li className='d-flex align-items-center w-100  gap-2  li_color' >
<CiSettings  className='icon_color fs-2' />
Setting
</li>
        </ul>
    </div>
    </>
  )
}

export default SideTeacher