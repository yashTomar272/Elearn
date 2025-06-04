import { BiEditAlt } from "react-icons/bi";
import { useNavigate,useParams } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../component/Loader";
import {  toast } from "react-toastify";
import second from "../imgs/hh.webp"



const SeeLecture = () => {
  const navigate=useNavigate();
    const [Showloader,setShowloader]=useState(true)
  
  const { id } = useParams(); // course ID
  console.log("id",id)
  const [lecture, setLecture] = useState([]);
  console.log("lecture",lecture)
 
  const [selectedUrl, setSelectedUrl] = useState("");
  const URL = "http://localhost:8000";

  useEffect(() => {
    const fetchlecture = async () => {
      try {
        const res = await axios.get(`${URL}/courses-lecture/${id}`);
        setLecture(res.data);
        setShowloader(false)
      } catch (err) {
        console.error("Error fetching lecture:", err);
      }
    };

    fetchlecture();
  }, [lecture]);
  const deleteProduct = async (lessonId) => {
  try {
    const response = await axios.delete(`${URL}/delete-lecture`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        courseid: id,
        lessonid: lessonId,
      },
    });

    if (response.status === 200) {
      toast.success(response.data.message);
    } else {
      toast.error("Error deleting lesson");
    }
  } catch (error) {
    console.error("Delete error:", error);
    toast.error("Error deleting lesson");
  }
};

  return (
    <>
    <div className=' w-100 p-3' style={{height:"100%"}}>
<h3 style={{fontWeight:"500",fontSize:"25px"}} className='text-center fw-bold'>All Lecture</h3>
{Showloader && <Loader/>}
<div className='mt-3 d-flex flex-column gap-2 align-items-center'>
  {lecture.length > 0 ? (
                      <>
     {
     lecture.map((item,i)=>(
<div className='p-3 ' key={i} style={{boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:'9px',width:"450px"}}>
      <div className='d-flex justify-content-between align-items-center'>
         <span style={{fontWeight:"600"}}>Lecture {i+1}:</span>
         <div className='d-flex gap-2'>
            <MdDeleteOutline className='delet_Course_iconn' onClick={()=>deleteProduct(item._id)}/>
          <BiEditAlt className='edit_Course_iconn' onClick={()=>navigate(`/teacher/EditLecture/${id}/${item._id}`)}/>
         </div>
      
      </div>
        <span>{item.lessonName}</span>
    </div>
     ))
    }
     </>):(
                          <>
                                                 <div className="DALJU " style={{height:"100%",width:"100%"}}>
                                                   <img
                                                     src={second}
                                                     style={{ width: "170px", height: "80px" }}
                                                   />
                                                 </div>
                                               </>
                                             )}
                         
     

    
</div>
</div>
    </>
  )
}

export default SeeLecture