import React from 'react'
import Img from "../imgs/wallpaperFirst.jpg"
const Login = () => {
  return (
    
    <>
    <form className='Login_main_class position-relative' style={{height:"100vh",width:"100%"}}>
<img src={Img} className='img_class img-fluid' style={{height:"100vh",width:"100%"}}/>
<div className='position-absolute d-flex flex-column ' style={{height:"450px",width:"380px",padding:"15px",top:"50px",right:"50%",borderRadius:"9px",border:"1px solid black",backgroundColor:"#f5f2f5"}}>
<h2 style={{fontSize:"22.4px",color:"#2b2b2b",fontWeight:"500"}}>Learn from India's best teachers</h2>

<div className='DALJU w-100 flex-row gap-1'>
<div style={{width:"33%",height:"2px",backgroundColor:"rgba(112,112,112,0.1)"}}></div>
<h3 style={{fontSize:"16px",fontWeight:"500",color:"#333333"}}>Select the role</h3>
<div style={{width:"33%",height:"2px",backgroundColor:"rgba(112,112,112,0.1)"}}></div>
</div>

<div className="d-flex justify-content-between align-items-center">
  <div style={{ position: "relative" }}>
    <input
      type="radio"
      value="student"
      id="ft_student"
      name="role"
      className="radio_input"
      style={{ opacity: 0, position: "absolute" }}
    />
    <label htmlFor="ft_student" className="cr role_label">
      Student
    </label>
  </div>

  <div style={{ position: "relative" }}>
    <input
      type="radio"
      value="teacher"
      id="ft_teacher"
      name="role"
      className="radio_input"
      style={{ opacity: 0, position: "absolute" }}
    />
    <label htmlFor="ft_teacher" className="cr role_label">
      Teacher
    </label>
  </div>
</div>

<div className='DALJU w-100 flex-row gap-1'>
<div style={{width:"28%",height:"2px",backgroundColor:"rgba(112,112,112,0.1)"}}></div>
<h3 style={{fontSize:"16px",fontWeight:"500",color:"#333333"}}>Enter Your Details</h3>
<div style={{width:"28%",height:"2px",backgroundColor:"rgba(112,112,112,0.1)"}}></div>
</div>

</div>
    </form>
    </>
  )
}

export default Login