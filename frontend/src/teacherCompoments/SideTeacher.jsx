import React from 'react'
import { useState } from 'react';

import { RxDashboard } from "react-icons/rx";
import { IoBookOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { TbLayoutSidebarFilled } from "react-icons/tb";//ise laganahai jab mobile me side bar none rahe gaa ise click karne par on ho 

const SideTeacher = () => {
  const navigate=useNavigate()
 const [showSide,setShowSide]= useState();
  //  const isSmallScreen = useMediaQuery({ maxWidth: 992 });

  // useEffect(() => {
  //   if (isSmallScreen) {
  //     console.log('Screen is less than 500px');
  //     // Add your logic here, like:
  //     // setShow(true);
  //   } else {
  //     console.log('Screen is 500px or wider');
  //     // setShow(false);
  //   }
  // }, [isSmallScreen]); // Runs every time screen size crosses the threshold

  return (
    <>
    <div><div className='position-absolute top-0 fs-3 m-2' style={{zIndex:"2"}} onClick={()=>setShowSide(!showSide)}><TbLayoutSidebarFilled/></div></div>
    <div className={`h-100 position-relative   w-100 ${showSide?"d-lg-block d-none":'d-none'}`} style={{minWidth:"220px",maxWidth:"280px",background:"rgba(54, 35, 221, 0.6)",borderTopRightRadius:"12px",borderBottomRightRadius:"12px",paddingTop:"11px"}}>
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