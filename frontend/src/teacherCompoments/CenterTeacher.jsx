import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import photo from "../imgs/photo.jpg"

const CenterTeacher = () => {
     const [Show, setShow] = useState(true);
      const handleShow = () => {
        setShow(!Show);
      };
  return (
  <>
  <div className='TeacherDashboard_main h-100 w-100'>
<div className='top_div w-100   d-flex align-items-center justify-content-between px-4 ' style={{height:"60px"}}>
    {/* search code */}
<div className='search_div  d-flex align-items-center justify-content-between' style={{height:"40px",width:"250px"}}>
    <input type='text' placeholder='Search here' style={{flexGrow:"1",height:"40px",outline:"none",border:"none",padding:"0 5px 0 10px",borderTopLeftRadius:"7px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",}}/>
    <div className='DALJU bg-primary cr' style={{height:"40px",aspectRatio:"1",borderBottomRightRadius:"7px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",}}>
<CiSearch/>
    </div>
</div>
{/* profile logo code */}
<div className='profile_logo  DALJU gap-3' style={{height:"42px",borderRadius:"18px",padding:"0 7px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",}}>
<div><FaRegBell className='fs-4 cr'/></div>
<div className='profile_photo_div d-flex gap-2 align-items-center'>
    <img src={photo} alt='profile_photo' className='cr' style={{height:"30px",aspectRatio:"1",borderRadius:"50%"}}/>
    <div className='d-flex flex-column'>
    <p className='p-0 m-0 fw-bold' style={{fontWeight:"10px",height:"16px"}}>Yash tomar</p>
    <p className='p-0 m-0' style={{fontWeight:"2px",color:"rgba(94, 88, 88, 0.8)",height:"16px"}}>Teacher</p>
    </div>
</div>
<div>
    {Show ?(<TiArrowSortedDown className='cr text-primary fs-3' onClick={handleShow}/>):(<TiArrowSortedDown className='cr text-primary fs-3' onClick={handleShow}/>)}
</div>
</div>
</div>
  </div>
  </>
  )
}

export default CenterTeacher