import React from 'react'

const EditCourses = () => {
  const cathArr=[
  {name:"english"},
  {name:"hindi"}
]
  return (
    
   <>
   <div className='h-100 w-100 p-3'>
<h3 style={{fontWeight:"500",fontSize:"25px"}} className='text-center fw-bold'>Edit Courses Details</h3>

<div className='w-100 h-100 DALJU mt-3'>
<form style={{boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:"10px",height:"500px",width:"390px", backgroundColor: "rgba(110, 98, 214, 0.4)"}} className='p-3 d-flex flex-column gap-3' action="#">
                <div className="userInputBox">
                <input type="text" id="email" required className='m-0 text-dark' />
                <label htmlFor="email">Add thumbnail</label>
               </div>

               <div className="password position-relative  mt-2">
           <select 
             className="" style={{border:"1px solid white",background:"none",outline:"none",padding:"10px 15px",borderRadius:"10px",width:"350px"}}>
           <option >Select Course language</option>{
          cathArr.map((val,id)=>{
            return(
              <option key={id}>
              {val.name}
              </option>
            )
          })
           }
           </select>
         </div>
            <div className="userInputBox">
                <input type="text" id="Subject" required className='m-0 text-dark '/>
                <label htmlFor="Subject">Enter subject name</label>
               </div>
                 <div className="password position-relative  mt-2">
         <textarea
           placeholder="Enter Course title" style={{background:"none",color:"black",outline:"none",padding:"10px 16px",border:"1px solid white",borderRadius:"10px",width:"350px"}}></textarea>
         </div>
          <div className="userInputBox">
                <input type="text" id="valid" required className='m-0 text-dark' />
                <label htmlFor="valid">Enter valid date</label>
               </div>
          <div className="userInputBox">
                <input type="text" id="valid" required className='m-0 text-dark' />
                <label htmlFor="valid">How many lecture</label>
               </div>
          <div className="userInputBox">
                <input type="text" id="teachername" required className='m-0 text-dark'/>
                <label htmlFor="teachername">Enter your name</label>
               </div>
               <button className='see_btn text-center' >Submit</button>

</form>
</div>
</div>
   </>
  )
}

export default EditCourses