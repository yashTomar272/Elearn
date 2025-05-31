
import { PiStudent } from "react-icons/pi";
import { IoVideocamOutline } from "react-icons/io5"; 
import { IoBookOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";

import AnalyticI from "./AnalyticI"
import AnalyticII from "./AnalyticII"


const CenterTeacher = () => {
    
  return (
  <>
  <div className='TeacherDashboard_main h-100 w-100  px-3'>
  
{/* Total Student,My Course,Total Lecture,Transaction */}
<div className='w-100 mt-3 d-flex align-items-center justify-content-between p-2 '>
<div style={{height:"80px",width:"190px",borderRadius:"9px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"}} className=' p-3 d-flex align-items-center gap-3'>
    <div className='DALJU ' style={{height:"50px",aspectRatio:"1",borderRadius:"5px",color:"rgba(255, 0, 0, 0.6)",boxShadow:"0 0 20px rgba(255, 0, 0, 0.6)"}}><PiStudent className='fs-3'/></div>
    <div className='d-flex flex-column hap-1'> 
        <span className='fw-bold'>20k</span>
        <span style={{fontSize:"16px",fontWeight:"500",color:"rgba(94, 88, 88, 0.8)"}}>Total Student</span>
    </div>
</div>
<div style={{height:"80px",width:"190px",borderRadius:"9px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"}} className=' p-3 d-flex gap-3'>
    <div className='DALJU  ' style={{height:"50px",aspectRatio:"1",borderRadius:"5px",color:"rgba(219, 58, 198, 0.7)",boxShadow:"0 0 20px rgba(219, 58, 198, 0.6)"}}><IoBookOutline className='fs-3'/></div>
    <div className='d-flex flex-column hap-1'>
        <span style={{fontSize:"16px",fontWeight:"600"}}>12</span>
        <span style={{fontSize:"16px",fontWeight:"500",color:"rgba(94, 88, 88, 0.8)"}}>My Courses</span>
    </div>
</div>
<div style={{height:"80px",width:"190px",borderRadius:"9px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"}} className=' p-3 d-flex gap-3'>
    <div className='DALJU  ' style={{height:"50px",aspectRatio:"1",borderRadius:"5px",color:"rgba(9, 243, 107, 0.6)",boxShadow:"0 0 20px rgba(9, 243, 107, 0.6)"}}><IoVideocamOutline className='fs-3'/></div>
    <div className='d-flex flex-column hap-1'>
        <span style={{fontSize:"16px",fontWeight:"600"}}>23</span>
        <span style={{fontSize:"16px",fontWeight:"500",color:"rgba(94, 88, 88, 0.8)"}}>Total Lecture</span>
    </div>
</div>
<div style={{height:"80px",width:"190px",borderRadius:"9px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"}} className=' p-3 d-flex gap-3'>
    <div className='DALJU  ' style={{height:"50px",aspectRatio:"1",borderRadius:"5px",color:"rgba(54, 35, 221, 0.6)",boxShadow:"0 0 20px rgba(54, 35, 221, 0.6)"}}><CiCreditCard1 className='fs-3'/></div>
    <div className='d-flex flex-column hap-1'>
        <span style={{fontSize:"16px",fontWeight:"600"}}>3434</span>
        <span style={{fontSize:"16px",fontWeight:"500",color:"rgba(121, 111, 111, 0.8)"}}>Transaction</span>
    </div>
</div>
</div>
{/* chart of student */}
<div className='d-flex align-items-center justify-content-around mt-5'>
    <div style={{borderRadius:"9px",boxShadow:"0 0 20px rgba(9, 243, 107, 0.6)",padding:"10px"}}><AnalyticI/></div>
    <div style={{borderRadius:"9px",boxShadow:"0 0 20px rgba(54, 35, 221, 0.6)",padding:"20px"}}><AnalyticII/></div>
</div>
  </div>
  </>
  )
}

export default CenterTeacher