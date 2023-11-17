import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark nav">
        <div className="container-fluid navDiv ">
          <div>
            <img
              className="img-fluid logo"
              src={logo}
              alt=""
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse  "
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 li-h">
              <li className="nav-item li-h-1 ">
                <a
                  className="nav-link active nav-e"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item li-h-2">
                <a
                  className="nav-link active nav-e"
                  aria-current="page"
                  href="#"
                >
                  List
                </a>
              </li>
              <li className="nav-item li-h-3">
                <a
                  className="nav-link active nav-e"
                  aria-current="page"
                  href="#"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
