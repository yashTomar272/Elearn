// import React from 'react'
import { useState, useEffect} from 'react';

import { RxDashboard } from "react-icons/rx";
import { IoBookOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { TbLayoutSidebarFilled } from "react-icons/tb";//ise laganahai jab mobile me side bar none rahe gaa ise click karne par on ho 
import { useMediaQuery } from 'react-responsive';

const SideTeacher = () => {
  const navigate=useNavigate()
 const [showSide,setShowSide]= useState();

   const lgScreen = useMediaQuery({ maxWidth: 992 });

  useEffect(() => {
    if (lgScreen) {
      setShowSide(false)
    } else { setShowSide(true)
    }
  }, [lgScreen]);
  return (
    <>
    <div><div className='position-absolute top-0 fs-3 m-2' style={{zIndex:"4"}} onClick={()=>setShowSide(!showSide)}><TbLayoutSidebarFilled/></div></div>
    <div className={`h-100 ${lgScreen?"position-absolute":'position-relative'}  w-100 ${showSide?"":'d-none'}`} style={{zIndex:"3",minWidth:"220px",maxWidth:"280px",background:"rgba(134, 123, 235, 1)",borderTopRightRadius:"12px",borderBottomRightRadius:"12px",paddingTop:"11px"}}>
        <h3 className='m-0 mb-0' style={{fontWeight:"500",color:"white",textAlign:"center"}}>E-Learn</h3>
        <p className='fst-italic' style={{fontWeight:"500",fontSize:"14px",color:"white",textAlign:"center"}} >Learn From Home</p>

        <ul className=' mt-5 d-flex gap-3 flex-column' style={{padding:"0 0 0 17px "}}>
<li className='d-flex align-items-center w-100  gap-2  li_color'   onClick={() => {if(lgScreen)setShowSide(false); navigate("/teacher");
  }}>
<RxDashboard  className='icon_color fs-4' />
Dashboard
</li>
<li className='d-flex align-items-center w-100  gap-2  li_color' onClick={()=>{if(lgScreen)setShowSide(false);navigate("/teacher/MyCourses");}} >
<IoBookOutline  className='icon_color fs-3' />
Courses
</li>
<li className='d-flex align-items-center w-100  gap-2  li_color'  onClick={()=>{if(lgScreen)setShowSide(false);navigate("/teacher/SeeTransaction");}
}>
<CiCreditCard1  className='icon_color fs-2' />
Transaction
</li>
<li className='d-flex align-items-center w-100  gap-2  li_color' onClick={()=>{if(lgScreen)setShowSide(false);navigate("/teacher/ProfileSetting");}}>
<CiSettings  className='icon_color fs-2' />
Setting
</li>
        </ul>
    </div>
    </>
  )
}

export default SideTeacher