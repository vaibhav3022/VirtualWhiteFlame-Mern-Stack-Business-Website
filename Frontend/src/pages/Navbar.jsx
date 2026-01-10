import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
        <style >{`
        .navbar {
          padding: 1rem 2rem;
          background: #fff;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
         
        }

        .navbar-brand img {
          height: 60px;
          width: auto;
        }

        .navbar-nav {
          margin: 0 auto;
          gap: 1rem;
        }

        .navbar-nav .nav-link {
          font-weight: 600;
          color: #030303ff !important;
        }

        .navbar-nav .nav-link:hover {
          color: #230dedff !important;
        }

        .btn-green {
          background-color: #10b56f;
          color: #fff;
          font-weight: 600;
          border-radius: 25px;
          padding: 8px 25px;
          border: none;
        }

        .btn-green:hover {
          background-color: #0e9e61;
        }
           .carousel-item img {
      width: 100%;
      height: 400px;  /* slider height */
      object-fit: cover;
    }
       .img-box {
      position: relative;
      overflow: hidden;
      border-radius: 10px;
    }

    .img-box img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      transition: 0.3s ease;
    }

   
    .img-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      font-size: 2rem;
      padding: 15px;
      border-radius: 50%;
      opacity: 0;
      transition: 0.3s ease;
    }

   
      `}</style>

        <div className="container-fluid bg-info" >
            <div className="row">
                <div className="col-md-3">
                  <img src="/assets/logo.webp" alt="Logo" width="200" height="90" className="d-inline-block align-text-top ms-5"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="col-md-9">
                        <nav className="navbar navbar-expand-lg navbar-light bg-info ">
               
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-5">
                            <li className="nav-item ms-5">
                                <NavLink className="nav-link text-white fw-bold  active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item ms-5">
                                <NavLink className="nav-link text-white fw-bold " to="/about">About</NavLink>
                            </li>
                            <li className="nav-item ms-5">
                                <NavLink className="nav-link text-white fw-bold " to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item ms-5">
                                <NavLink className="nav-link text-white fw-bold " to="/gallery">Gallery</NavLink>
                            </li>
                            <li className="nav-item ms-5">
                                <NavLink className="nav-link text-white fw-bold " to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
               
            </nav>
                </div>
            </div>
        </div>
       
        </>
    );
}
export default Navbar;



