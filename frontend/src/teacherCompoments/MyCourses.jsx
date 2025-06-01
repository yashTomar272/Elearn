import React from 'react'
import photo from "../imgs/jsthumb.png"
import { MdDeleteOutline } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


const MyCourses = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className='h-100 w-100 p-3'>
<h3 style={{fontWeight:"500",fontSize:"25px"}} className='text-center fw-bold'>My Courses</h3>
<div className='row gap-3 d-flex align-items-center justify-content-evenly'>
    <div style={{height:"350px",maxWidth:"290px",minWidth:"280px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:"9px"}} className=' d-flex flex-column col position-relative '>
        <MdDeleteOutline className='delet_Course_icon'/>
        <BiEditAlt className='edit_Course_icon' onClick={()=>navigate("/teacher/EditLecture")}/>
<img src={photo} alt='Courses_img' style={{height:"50%",width:"100%",borderRadius:"9px 9px 0 "}}/>
<div style={{height:"50%",width:"100%"}} className=' p-2 d-flex flex-column gap-2'>
<div className='d-flex gap-3'>
  <span style={{color:"black",fontSize:"13px",fontWeight:"400"}}>ENGLISH</span>
  <span style={{color:"blue",fontSize:"13px",fontWeight:"600"}}>JAVA SCRIPT</span>
</div>
<span style={{color:"black",fontSize:"16px",fontWeight:"600"}}>Course on magnetic effect of electric current ,hello codersw</span>
<span style={{color:"rgb(179, 174, 174)",fontSize:"12px",fontWeight:"600"}}>Ended on Nov 29,2025 . 4 Lecture</span>
<div className='d-flex flex-row justify-content-between align-items-center'>
<span style={{color:"black",fontSize:"14px",fontWeight:"600"}}>Yash Tomar</span>
<button className='see_btn' onClick={()=>navigate("/teacher/SeeLecture")} >See Lecture</button>
</div>
</div>
    </div>

<div style={{height:"350px",maxWidth:"290px",minWidth:"280px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:"9px"}} className=' d-flex flex-column col position-relative '>
        <MdDeleteOutline className='delet_Course_icon'/>
        <BiEditAlt className='edit_Course_icon' onClick={()=>navigate("/teacher/EditLecture")}/>
<img src={photo} alt='Courses_img' style={{height:"50%",width:"100%",borderRadius:"9px 9px 0 "}}/>
<div style={{height:"50%",width:"100%"}} className=' p-2 d-flex flex-column gap-2'>
<div className='d-flex gap-3'>
  <span style={{color:"black",fontSize:"13px",fontWeight:"400"}}>ENGLISH</span>
  <span style={{color:"blue",fontSize:"13px",fontWeight:"600"}}>JAVA SCRIPT</span>
</div>
<span style={{color:"black",fontSize:"16px",fontWeight:"600"}}>Course on magnetic effect of electric current ,hello codersw</span>
<span style={{color:"rgb(179, 174, 174)",fontSize:"12px",fontWeight:"600"}}>Ended on Nov 29,2025 . 4 Lecture</span>
<div className='d-flex flex-row justify-content-between align-items-center'>
<span style={{color:"black",fontSize:"14px",fontWeight:"600"}}>Yash Tomar</span>
<button className='see_btn ' onClick={()=>navigate("/teacher/SeeLecture")} >See Lecture</button>
</div>
</div>
    </div>


    <div style={{height:"350px",maxWidth:"290px",minWidth:"280px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:"9px"}} className=' d-flex flex-column col position-relative '>
        <MdDeleteOutline className='delet_Course_icon'/>
        <BiEditAlt className='edit_Course_icon' onClick={()=>navigate("/teacher/EditCourses")}/>
<img src={photo} alt='Courses_img' style={{height:"43%",width:"100%",borderRadius:"9px 9px 0 "}}/>
<div style={{height:"50%",width:"100%"}} className=' p-2 d-flex flex-column gap-2'>
<div className='d-flex gap-3'>
  <span style={{color:"black",fontSize:"13px",fontWeight:"400"}}>ENGLISH</span>
  <span style={{color:"blue",fontSize:"13px",fontWeight:"600"}}>JAVA SCRIPT</span>
</div>
<span style={{color:"black",fontSize:"16px",fontWeight:"600"}}>Course on magnetic effect of electric current ,hello codersw</span>
<span style={{color:"rgb(179, 174, 174)",fontSize:"12px",fontWeight:"600"}}>Ended on Nov 29,2025 . 4 Lecture</span>
<div className='d-flex flex-row justify-content-between align-items-center'>
<span style={{color:"black",fontSize:"14px",fontWeight:"600"}}>Yash Tomar</span>
<button className='see_btn' onClick={()=>navigate("/teacher/SeeLecture")}>See Lecture</button>
</div>
<div className="d-flex justify-content-end w-100">
  <button className="see_btnn" onClick={()=>navigate("/teacher/AddLecture")}>Add Lecture</button>
</div>
</div>
    </div> 


    <div style={{height:"350px",maxWidth:"290px",minWidth:"280px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:"9px"}} className=' d-flex flex-column position-relative '>
        <MdDeleteOutline className='delet_Course_icon'/>
        <BiEditAlt className='edit_Course_icon' onClick={()=>navigate("/teacher/EditCourses")}/>
<img src={photo} alt='Courses_img' style={{height:"43%",width:"100%",borderRadius:"9px 9px 0 "}}/>
<div style={{height:"50%",width:"100%"}} className=' p-2 d-flex flex-column gap-2'>
<div className='d-flex gap-3'>
  <span style={{color:"black",fontSize:"13px",fontWeight:"400"}}>ENGLISH</span>
  <span style={{color:"blue",fontSize:"13px",fontWeight:"600"}}>JAVA SCRIPT</span>
</div>
<span style={{color:"black",fontSize:"16px",fontWeight:"600"}}>Course on magnetic effect of electric current ,hello codersw</span>
<span style={{color:"rgb(179, 174, 174)",fontSize:"12px",fontWeight:"600"}}>Ended on Nov 29,2025 . 4 Lecture</span>
<div className='d-flex flex-row justify-content-between align-items-center'>
<span style={{color:"black",fontSize:"14px",fontWeight:"600"}}>Yash Tomar</span>
<button className='see_btn' onClick={()=>navigate("/teacher/SeeLecture")}>See Lecture</button>
</div>
<div className="d-flex justify-content-end w-100">
  <button className="see_btnn" onClick={()=>navigate("/teacher/AddLecture")}>Add Lecture</button>
</div>
</div>


    </div>    
    <div style={{height:"350px",maxWidth:"290px",minWidth:"280px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:"9px"}} className=' d-flex flex-column position-relative '>
        <MdDeleteOutline className='delet_Course_icon'/>
        <BiEditAlt className='edit_Course_icon' onClick={()=>navigate("/teacher/EditCourses")}/>
<img src={photo} alt='Courses_img' style={{height:"43%",width:"100%",borderRadius:"9px 9px 0 "}}/>
<div style={{height:"50%",width:"100%"}} className=' p-2 d-flex flex-column gap-2'>
<div className='d-flex gap-3'>
  <span style={{color:"black",fontSize:"13px",fontWeight:"400"}}>ENGLISH</span>
  <span style={{color:"blue",fontSize:"13px",fontWeight:"600"}}>JAVA SCRIPT</span>
</div>
<span style={{color:"black",fontSize:"16px",fontWeight:"600"}}>Course on magnetic effect of electric current ,hello codersw</span>
<span style={{color:"rgb(179, 174, 174)",fontSize:"12px",fontWeight:"600"}}>Ended on Nov 29,2025 . 4 Lecture</span>
<div className='d-flex flex-row justify-content-between align-items-center'>
<span style={{color:"black",fontSize:"14px",fontWeight:"600"}}>Yash Tomar</span>
<button className='see_btn' onClick={()=>navigate("/teacher/SeeLecture")}>See Lecture</button>
</div>
<div className="d-flex justify-content-end w-100">
  <button className="see_btnn" onClick={()=>navigate("/teacher/AddLecture")}>Add Lecture</button>
</div>
</div>
    </div>    

</div>
        
    </div>
    </>
  )
}

export default MyCourses