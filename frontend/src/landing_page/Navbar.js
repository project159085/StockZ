import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container p-2">
        <div className="col">
          <a className="navbar-brand" href="#">
            <img src="media/images/logo.svg" alt="logo" style={{ width: "30%" }} />
          </a>

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
                  <a className="nav-link active" href="#">Signup</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Product</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Support</a>
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
