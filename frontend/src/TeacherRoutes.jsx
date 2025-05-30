import { Routes, Route } from 'react-router-dom'
import TeacherLayout from './teacherCompoments/TeacherLayout'
import CenterTeacher from './teacherCompoments/CenterTeacher'
import MyCourses from './teacherCompoments/MyCourses'
import SeeLecture from './teacherCompoments/SeeLecture'
import SeeTransaction from './teacherCompoments/SeeTransaction'
import ProfileSetting from './teacherCompoments/ProfileSetting'
import EditLecture from './teacherCompoments/EditLecture'
import EditCourses from './teacherCompoments/EditCourses'

// aur koi pages...

const TeacherRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TeacherLayout />}>
        <Route path="" element={<CenterTeacher />} />
        <Route path="MyCourses" element={<MyCourses />} />
        <Route path="SeeLecture" element={<SeeLecture />} />
        <Route path="SeeTransaction" element={<SeeTransaction />} />
        <Route path="ProfileSetting" element={<ProfileSetting />} />
        <Route path="EditLecture" element={<EditLecture />} />
        <Route path="EditCourses" element={<EditCourses />} />

        
     
        {/* Add more teacher routes here */}
      </Route>
    </Routes>
  )
}

export default TeacherRoutes
