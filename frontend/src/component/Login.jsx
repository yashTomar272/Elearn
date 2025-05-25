// import React, { useState } from 'react'
// import Img from "../imgs/wallpaperFirst.jpg"
// import './Login.css';

// const Login = () => {
//   const [role,setRole]= useState('student');
//   return (
    
//     <>
//     <form className='Login_main_class position-relative' style={{height:"100vh",width:"100%"}}>
// <img alt='hello' src={Img} className='img_class img-fluid' style={{height:"100vh",width:"100%"}}/>
// <div className='position-absolute  d-flex flex-column top-0' style={{height:"100%",width:"100%",display:"flex", alignItems:"center",borderRadius:"9px"}}>
// <div className='position-relative ' style={{backgroundColor:"#f5f2f5",top:"100px", height:"58%", width:"50%",minWidth:"310px",maxWidth:"600px",padding:"15px"}}>
//   <h2 style={{width:"100%",textAlign:"center",fontSize:"22.4px",color:"#2b2b2b",fontWeight:"500"}}>Learn from India's best teachers</h2>

// {/* <div className='DALJU w-100 flex-row gap-1'>
// <div style={{width:"33%",height:"2px",backgroundColor:"rgba(112,112,112,0.1)"}}></div>
// <h3 style={{fontSize:"16px",fontWeight:"500",color:"#333333"}}>Select the role</h3>
// <div style={{width:"33%",height:"2px",backgroundColor:"rgba(112,112,112,0.1)"}}></div>
// </div> */}
// <div className="DALJU d-flex align-items-center w-100 gap-2">
//   <div style={{ flex: 1,height: "2px",backgroundColor: "rgba(112,112,112,0.1)"}}></div>
//   <h3 style={{
//     fontSize: "16px",
//     fontWeight: "500",
//     color: "#333",
//     backgroundColor: "#f5f2f5", // hides line behind text
//     padding: "0 8px"
//   }}>
//     Select the role
//   </h3>
//   <div style={{
//     flex: 1,
//     height: "2px",
//     backgroundColor: "rgba(112,112,112,0.1)"
//   }}></div>
// </div>

// <div className="d-flex justify-content-between align-items-center row mb-3">
//   <div className='d-flex justify-content-center align-items-center col-6' style={{ position: "relative" }}>
//     <input
//       type="radio"
//       value="student"
//       id="ft_student"
//       name="role"
//       checked={role === "student"}
//       className="radio_input d-none"
//       style={{ opacity: 0, position: "absolute" }}
//     />
//     <label onClick={() => setRole("student")} htmlFor="ft_student" className="cr role_label">
//       Student
//     </label>
//   </div>

//   <div className='col-6 d-flex justify-content-center align-items-center' style={{ position: "relative" }}>
//     <input
//       type="radio"
//       value="teacher"
//       id="ft_teacher"
//       name="role"
//       checked={role === "teacher"}
//       className="radio_input d-none"
//       style={{ opacity: 0, position: "absolute" }}
//     />
//     <label onClick={() => setRole("teacher")} htmlFor="ft_teacher" className="cr role_label">
//       Teacher
//     </label>
//   </div>
// </div>

// {/* <div className='DALJU w-100 flex-row gap-1'>
// <div style={{width:"28%",height:"2px",backgroundColor:"rgba(112,112,112,0.1)"}}></div>
// <h3 style={{fontSize:"16px",fontWeight:"500",color:"#333333"}}>Enter Your Details</h3>
// <div style={{width:"28%",height:"2px",backgroundColor:"rgba(112,112,112,0.1)"}}></div>
// </div> */}
// <div className="DALJU d-flex align-items-center w-100 gap-2">
//   <div style={{ flex: 1,height: "2px",backgroundColor: "rgba(112,112,112,0.1)"}}></div>
//   <h3 style={{
//     fontSize: "16px",
//     fontWeight: "500",
//     color: "#333",
//     backgroundColor: "#f5f2f5", // hides line behind text
//     padding: "0 8px"
//   }}>
//     Enter Your Details
//   </h3>
//   <div style={{
//     flex: 1,
//     height: "2px",
//     backgroundColor: "rgba(112,112,112,0.1)"
//   }}></div>
// </div>
// <div className='bg-red  mt-3  m-2 container-fluid' style={{bottom:"0"}}>
// {/* { role === "student" ? (<div className='d-flex flex-column gap-3'> <input
//         type="text"
//         name="childName"
//         className="form-control mb-2"
//         placeholder="Enter Your Name"
//         />
//  <input
//         type="text"
//         name="childName"
//         className="form-control mb-2"
//         placeholder="Enter Class"
//         />
//       <div className="input-group mb-2">
//         <input
//           type="tel"
//           name="mobile"
//           className="form-control"
//           placeholder="Enter your Mobile Number"
//           />
//         <button
//           className="btn btn-info"
//           type="button"
//         >
//           Send OTP
//         </button>
//       </div>

//       <input
//         type="email"
//         name="email"
//         className="form-control mb-2"
//         placeholder="Email Address"
//         /></div>):null}
//         {role==="teacher"? ( <div className='d-flex flex-column gap-3'> <input
//         type="text"
//         name="fullName"
//         className="form-control mb-2"
//         placeholder="Enter Full Name"
//         />
//       <input
//         type="text"
//         name="subject"
//         className="form-control mb-2"
//         placeholder="Subject or Expertise"
//         />
//         <input
//         type="text"
//         name="subject"
//         className="form-control mb-2"
//         placeholder="Qualification"
//         />
//       <div className="input-group mb-2">
//         <input
//           type="tel"
//           name="mobile"
//           className="form-control"
//           placeholder="Mobile Number"
//           />
//         <button
//           className="btn btn-info"
//           type="button"
//          >
//           Send OTP
//         </button>
//       </div>
//       <input
//         type="email"
//         name="email"
//         className="form-control mb-4"
//         placeholder="Email Address"
//         />

//       <hr /> */}

//        {/* </div>):null } */}
//   <div class="loginBox">
//         {/* <h2>Login</h2> */}
//         <form action="#">
//             <div class="userInputBox">
//                 <input type="text" id="usernameInputBox" required/>
//                 <label for="usernameInputBox">Username</label>
//             </div>
// <div class="userInputBox">
//                 <input type="text" id="usernameInputBox" required/>
//                 <label for="usernameInputBox">Email</label>
//             </div>
//             <div class="userInputBox">
//                 <input type="password" id="passwordInputBox" required/>
//                 <label for="passwordInputBox">Password</label>
//             </div>
//             <div class="userInputBox">
//                 <input type="text" id="usernameInputBox" required/>
//                 <label for="usernameInputBox">Mobile No</label>
//             </div>
//             <div class={`userInputBox ${role==="student"?'d-none':''}`}>
//                 <input type="text" id="usernameInputBox" required/>
//                 <label for="usernameInputBox">Qualification</label>
//             </div>
//             <a href="#" type="submit">
//                 <span></span>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//                 Submit
//             </a>
//         </form>
//     </div>
//        </div>
// </div></div>
//     </form>
//     </>
//   )
// }

// export default Login
import React, { useState } from 'react';
import Img from "../imgs/wallpaperFirst.jpg";
import './Login.css';

const Login = () => {
  const [role, setRole] = useState('student');

  return (
    <form
      className="Login_main_class position-relative"
      style={{ height: "100vh", width: "100%" }}
    >
      <img
        alt="login background"
        src={Img}
        className="img_class img-fluid"
        style={{ height: "100vh", width: "100%" }}
      />

      <div
        className="position-absolute d-flex flex-column top-0"
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          borderRadius: "9px",
        }}
      >
        {/* <div
          className="position-relative"
          style={{
            backgroundColor: "#f5f2f5",
            top: "100px",
            height: "58%",
            width: "50%",
            minWidth: "310px",
            maxWidth: "600px",
            padding: "15px",
          }}
        > */}
         
         

          {/* Form Heading */}
          

          {/* Login Box */}
          <div className="loginBox ">
          <h2
            style={{
              textAlign: "center",
              fontSize: "22.4px",
              color: "pink",
              fontWeight: "500",
            }}
          >
            Learn from India's best teachers
          </h2>

          {/* Role Selector */}
          <div className="DALJU d-flex align-items-center w-100 gap-2 mt-3">
            <div style={{ flex: 1, height: "2px", backgroundColor: "rgba(112,112,112,0.1)" }}></div>
            <h3 style={{ fontSize: "16px", fontWeight: "500", color: "white", backgroundColor: "transparent", padding: "0 8px" }}>
              Select the role
            </h3>
            <div style={{ flex: 1, height: "2px", backgroundColor: "rgba(112,112,112,0.1)" }}></div>
          </div>

          <div className="d-flex justify-content-between align-items-center row mb-3 mt-2">
            <div className="col-6 d-flex justify-content-center align-items-center">
              <input
                type="radio"
                value="student"
                id="ft_student"
                name="role"
                checked={role === "student"}
                onChange={() => setRole("student")}
                className="d-none"
              />
              <label htmlFor="ft_student" className="cr role_label">Student</label>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <input
                type="radio"
                value="teacher"
                id="ft_teacher"
                name="role"
                checked={role === "teacher"}
                onChange={() => setRole("teacher")}
                className="d-none"
              />
              <label htmlFor="ft_teacher" className="cr role_label">Teacher</label>
            </div>
          </div>
            <div className="DALJU d-flex align-items-center w-100 gap-2">
            <div style={{ flex: 1, height: "2px", backgroundColor: "rgba(112,112,112,0.1)" }}></div>
            <h3 style={{ fontSize: "16px", fontWeight: "500", color: "white", backgroundColor: "transparent", padding: "0 8px" }}>
              Enter Your Details
            </h3>
            <div style={{ flex: 1, height: "2px", backgroundColor: "rgba(112,112,112,0.1)" }}></div>
          </div>
            <form action="#">
              <div className="userInputBox">
                <input type="text" id="username" required />
                <label htmlFor="username">Username</label>
              </div>
              <div className="userInputBox">
                <input type="email" id="email" required />
                <label htmlFor="email">Email</label>
              </div>
              <div className="userInputBox">
                <input type="password" id="password" required />
                <label htmlFor="password">Password</label>
              </div>
              <div className="userInputBox">
                <input type="tel" id="mobile" required />
                <label htmlFor="mobile">Mobile No</label>
              </div>

              {/* Conditional Qualification Field */}
              {role === "teacher" && (
                <div className="userInputBox">
                  <input type="text" id="qualification" required />
                  <label htmlFor="qualification">Qualification</label>
                </div>
              )}

              <a href="#" type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
            </form>
          </div>
        </div>
      {/* </div> */}
    </form>
  );
};

export default Login;
