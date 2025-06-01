import React from 'react'

const AddLecture = () => {
  return (
    <>
    <div className='h-100 w-100 p-3'>
<h3 style={{fontWeight:"500",fontSize:"25px"}} className='text-center fw-bold'>Add Lecture Here</h3>

<div className='w-100 h-100 DALJU mt-3'>
<form style={{boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:"10px",height:"200px",width:"390px", backgroundColor: "rgba(110, 98, 214, 0.4)"}} className='p-3 d-flex flex-column gap-3' action="#">
 <span style={{color:"black",fontSize:"16px",fontWeight:"600"}}>Course on magnetic effect of electric current ,hello codersw</span>


                <div className="userInputBox">
                <input type="text" id="name" required className='m-0 text-dark' />
                <label htmlFor="name">Add lecture video link</label>
               </div>

              
              <div className="d-flex justify-content-end w-100">
  <button className="see_btn">Add lecture</button>
</div>

</form>
</div>
</div>
    </>
  )
}

export default AddLecture