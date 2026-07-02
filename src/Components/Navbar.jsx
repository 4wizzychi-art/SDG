import React from 'react'
import { Link } from 'react-router-dom'
import SDG_icon from '../images/SDG_icon.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{
      backgroundColor:"#CCCCCC"
    }}>
      <div className="container d-flex justify-content-between">

        <div>

   <img src={SDG_icon} alt="" className=''style={{
    width:"100px"
   }}/>

        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav g-5">

            <li className="nav-item">
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/progress">
                Progress
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/target">
                Targets
              </Link>

            </li>
              <li className="nav-item">
              <Link className="nav-link" to="/action">
                Actions
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar