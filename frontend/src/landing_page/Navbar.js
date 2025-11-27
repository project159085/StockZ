import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container p-2">
        <div className="col">
          <Link className="navbar-brand" to="/">
            <img src="media/images/logo.svg" alt="logo" style={{ width: "30%" }} />
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
        </div>

        <div className="col">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/product">Product</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/pricing">Pricing</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/support">Support</Link>
                </li>
                <li className="nav-item">
                  <i className="nav-link fa fa-bars mt-1" aria-hidden="true"></i>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
