import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { IoBookOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { TbLayoutSidebarFilled } from "react-icons/tb";//ise laganahai jab mobile me side bar none rahe gaa ise click karne par on ho 

const SideTeacher = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className='h-100 w-100 ' style={{background:"rgba(54, 35, 221, 0.6)",borderTopRightRadius:"12px",borderBottomRightRadius:"12px",paddingTop:"11px"}}>
        <h3 className='m-0 mb-0' style={{fontWeight:"500",color:"white",textAlign:"center"}}>E-Learn</h3>
        <p className='fst-italic' style={{fontWeight:"500",fontSize:"14px",color:"white",textAlign:"center"}} >Learn From Home</p>

        <ul className=' mt-5 d-flex gap-3 flex-column' style={{padding:"0 0 0 17px "}}>
<li className='d-flex align-items-center w-100  gap-2  li_color' onClick={()=>navigate("/teacher")}>
<RxDashboard  className='icon_color fs-4' />
Dashboard
</li>
<li className='d-flex align-items-center w-100  gap-2  li_color' onClick={()=>navigate("/teacher/MyCourses")} >
<IoBookOutline  className='icon_color fs-3' />
Courses
</li>
<li className='d-flex align-items-center w-100  gap-2  li_color'  onClick={()=>navigate("/teacher/SeeTransaction")
}>
<CiCreditCard1  className='icon_color fs-2' />
Transaction
</li>
<li className='d-flex align-items-center w-100  gap-2  li_color' onClick={()=>navigate("/teacher/ProfileSetting")}>
<CiSettings  className='icon_color fs-2' />
Setting
</li>
        </ul>
    </div>
    </>
  )
}

export default SideTeacher