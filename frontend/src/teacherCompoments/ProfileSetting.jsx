import React from 'react'
import photo from "../imgs/photo.jpg"

const ProfileSetting = () => {
  return (
   <>
   <div className='h-100 w-100 p-4  d-flex align-items-center justify-content-center'>
<div className='d-flex align-items-center gap-5 flex-sm-row flex-column' style={{maxWidth:"550px"}}>
 <div className='d-flex flex-column gap-4 align-items-center'>
   <div className='p-1' style={{height:"200px",aspectRatio:"1",borderRadius:"50%",border:"3px solid rgba(54, 35, 221, 0.6)"}}>
    <img src={photo} alt='Profile_img' style={{borderRadius:"50%"}} className='w-100 h-100'/>
  </div>
<button className='see_btn'>Logout</button>
 </div>
  <div className='d-flex align-items-sm-start align-items-center flex-column gap-2'>
    <span style={{fontSize:"25px",fontWeight:"600",color:"black"}}>Yash Tomar</span>
    <span style={{fontSize:"20px",fontWeight:"500",color:"black"}}>Registered in at: 30/08/2025</span>
    <span style={{fontSize:"20px",fontWeight:"500",color:"black"}}>TEACHER</span>

  </div>
</div>

   </div>
   </>
  )
}

export default ProfileSetting