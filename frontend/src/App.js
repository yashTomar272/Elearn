
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
 import "bootstrap/dist/js/bootstrap.bundle.js";
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
 import Register from './component/Register';
 import Login from './component/Login';
 import Hello from './component/Hello';
import TeacherDashboard from './teacherCompoments/TeacherDashboard';
 
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Hello/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/TeacherDashboard" element={<TeacherDashboard/>}/>
    </Routes>
    </>
  );
}

export default App;
