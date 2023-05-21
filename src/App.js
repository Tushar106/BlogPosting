import './App.css';
import React, { createContext, useState } from 'react';
// import { ReactDOM } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import HomePage from './components/pages/homePage/HomePage';
import Login from './components/pages/loginPage/Login';
import Upload from './components/pages/uploadPage/Upload';
import { Context } from './components/hooks/BlogContex';
import BlogPage from './components/pages/blogPage/BlogPage';
import Register from './components/pages/registerPage/Register';

function App() {
  const [blogs, setBlogs] = useState(
    !localStorage.getItem("blogs")
      ? []
      : JSON.parse(localStorage.getItem("blogs"))
  );

  return (
    <Context.Provider value={[blogs,setBlogs]}>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/register'element={<Register/>}/>

    <Route path='/upload'element={<Upload/> }/>
    <Route path='/blogs'element={<BlogPage/> }/>


   </Routes>
   </BrowserRouter>
   </Context.Provider>
   
  );
}

export default App;
