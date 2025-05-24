import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
 import "bootstrap/dist/js/bootstrap.bundle.js";
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
 import Login from './component/Login';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
