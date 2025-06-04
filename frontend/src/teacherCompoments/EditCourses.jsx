import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EditCourses = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const URL = "http://localhost:8000"; // 👈 change if needed

  const cathArr = [{ name: "english" }, { name: "hindi" }];
  const [formData, setFormData] = useState({
    language: "",
    type: "",
    subject: "",
    title: "",
    valid: "",
    lecture: "",
    teachername: "",
  });
  const [thumbnail, setThumbnail] = useState(null);

  // ✅ Fetch data on load
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`${URL}/get-course-by-id/${id}`, {
          headers: {
            id: localStorage.getItem("id"),
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setFormData(response.data.data);
      } catch (err) {
        toast.error("Failed to fetch course details");
      }
    };
    fetchCourse();
  }, [id]);

  // ✅ Handle text input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Handle file input
  const handleFileChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("language", formData.language);
    data.append("type", formData.type);
    data.append("subject", formData.subject);
    data.append("title", formData.title);
    data.append("valid", formData.valid);
    data.append("lecture", formData.lecture);
    data.append("teachername", formData.teachername);
    if (thumbnail) {
      data.append("thumbnail", thumbnail);
    }

    try {
      const response = await axios.put(`${URL}/update-course`, data, {
  headers: {
    "Content-Type": "multipart/form-data",
    id: localStorage.getItem("id"),
    courseid: id, // 👈 Add this!
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

      if (response.status === 200) {
        toast.success(response.data.message || "Course updated successfully");
        navigate("/teacher/MyCourses");
      } else {
        toast.error("Failed to update course");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className='h-100 w-100 p-3'>
      <h3 className='text-center fw-bold' style={{ fontSize: "25px" }}>
        Update Course Details
      </h3>
      <div className='w-100 h-100 DALJU mt-3'>
        <form
          onSubmit={handleSubmit}
          encType='multipart/form-data'
          style={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            height: "auto",
            width: "390px",
            backgroundColor: "rgba(110, 98, 214, 0.4)",
          }}
          className='p-3 d-flex flex-column gap-3'
        >
          <input type='file' name='thumbnail' onChange={handleFileChange} />

          <select
            name='language'
            value={formData.language}
            onChange={handleChange}
            style={{
              border: "1px solid white",
              background: "none",
              outline: "none",
              padding: "10px 15px",
              borderRadius: "10px",
              width: "350px",
            }}
          >
            <option>Select Course language</option>
            {cathArr.map((val, id) => (
              <option key={id}>{val.name}</option>
            ))}
          </select>

          <select
            name='type'
            value={formData.type}
            onChange={handleChange}
            className='mt-2'
            style={{
              border: "1px solid white",
              background: "none",
              outline: "none",
              padding: "10px 15px",
              borderRadius: "10px",
              width: "350px",
            }}
          >
            <option>Select Course type</option>
            <option>paid</option>
            <option>free</option>
          </select>

          <input
            type='text'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            required
            className='m-0 text-dark'
            placeholder='Subject Name'
          />

          <textarea
            name='title'
            value={formData.title}
            onChange={handleChange}
            placeholder='Course Title'
            style={{
              background: "none",
              color: "black",
              outline: "none",
              padding: "10px 16px",
              border: "1px solid white",
              borderRadius: "10px",
              width: "350px",
            }}
          ></textarea>

          <input
            type='text'
            name='valid'
            value={formData.valid}
            onChange={handleChange}
            required
            className='m-0 text-dark'
            placeholder='Valid date'
          />

          <input
            type='text'
            name='lecture'
            value={formData.lecture}
            onChange={handleChange}
            required
            className='m-0 text-dark'
            placeholder='Number of lectures'
          />

          <input
            type='text'
            name='teachername'
            value={formData.teachername}
            readOnly
            className='m-0 text-dark'
          />

          <button type='submit' className='see_btn text-center'>
            Update Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourses;
