import React from 'react'
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";

const SeeLecture = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className='h-100 w-100 p-3'>
<h3 style={{fontWeight:"500",fontSize:"25px"}} className='text-center fw-bold'>All Lecture</h3>
<div className='mt-3 d-flex flex-column gap-2 align-items-center'>
     <div className='p-3' style={{boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:'9px',width:"450px"}}>
      <div className='d-flex justify-content-between align-items-center'>
         <span style={{fontWeight:"600"}}>Lecture 1:</span>
         <div className='d-flex gap-2'>
            <MdDeleteOutline className='delet_Course_iconn'/>
          <BiEditAlt className='edit_Course_iconn' onClick={()=>navigate("/teacher/EditLecture")}/>
         </div>
      
      </div>
        <span>Course on magnetic effect of electric current ,hello codersw</span>
    </div>

    <div className='p-3' style={{boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:'9px',width:"450px"}}>
      <div className='d-flex justify-content-between align-items-center'>
         <span style={{fontWeight:"600"}}>Lecture 1:</span>
         <div className='d-flex gap-2'>
            <MdDeleteOutline className='delet_Course_iconn'/>
          <BiEditAlt className='edit_Course_iconn' onClick={()=>navigate("/teacher/EditLecture")}/>
         </div>
      
      </div>
        <span>Course on magnetic effect of electric current ,hello codersw</span>
    </div>
</div>
</div>
    </>
  )
}

export default SeeLecture