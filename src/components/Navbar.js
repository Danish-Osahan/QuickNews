import React from "react";
import { Link } from "react-router-dom";
// import Spinner from "../Spinner";

// import PropTypes from 'prop-types'

const Navbar=(props) => {
    // let{togglemode}=this.props
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand " to="/">
              <img
                src="nav_icon.png"
                alt=""
                width="40"
                height="40"
                className="d-inline-block align-text-top"
              />
               {/* <img id="footer"src="news_1.gif" alt="" style={{width:'50px',height:'50px'}}/> */}
              <strong className="mx-2 align-middle">QucikNews</strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
              </ul>
              <div className="form-check form-switch">
              <input
                className="form-check-input "
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.changemode}
              />
                <img src={props.mode==='Light'?'moon.gif':'sun.gif'} style={{width:'40px',height:'40px'}} alt="" className="form-check-label" htmlFor="flexSwitchCheckDefault"></img>
            </div>
            </div>
           
          </div>
        </nav>
      </div>
    );
  }


export default Navbar;
