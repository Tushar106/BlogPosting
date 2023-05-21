import React from "react";
import "./navbar.css"
import { useNavigate } from "react-router-dom";
function Navbar(){
  const navigate=useNavigate();
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container">
            <a className="navbar-brand me-2" href="/">
              <h1 className="nav-title">Blog_Post</h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarButtonsExample">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/upload">Upload</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blogs">Blogs</a>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <button type="button" className="btn btn-link px-3 me-2" onClick={()=>navigate("/login")}>
                  Login
                </button>
                <button type="button" className="btn btn-primary me-3" onClick={()=>{navigate("/register")}}>
                  Sign up for free
                </button>
                <a
                  className="btn btn-dark px-3"
                  href="https://github.com/mdbootstrap/mdb-ui-kit"
                  role="button"
                  ><i className="fab fa-github"></i
                ></a>
              </div>
            </div>
          </div>
        </nav>

    )
}
export default Navbar;