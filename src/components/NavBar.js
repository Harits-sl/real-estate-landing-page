/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Button from 'elements/button/index';

import logoImage from 'assets/images/logo.png';
import searchImage from 'assets/images/search.png';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-4 mb-5">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logoImage} alt="" width="100" />
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center fs-5 fw-medium">
            <li className="nav-item" style={{ marginRight: 50 }}>
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item" style={{ marginRight: 50 }}>
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown" style={{ marginRight: 50 }}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Comunity
              </a>
              {/* TODO: mengisi list dropdown */}
              {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul> */}
            </li>
            <li className="nav-item" style={{ marginRight: 70 }}>
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item" style={{ marginRight: 40 }}>
              <Button
                className="btn btn-sm bg-light"
                style={{ width: 40, height: 40 }}
                isCircle
              >
                <img width={20} height={20} src={searchImage} alt="" />
              </Button>
            </li>
            <li className="nav-item ">
              <Button
                className="btn btn-sm py-2 px-5 bg-light fs-5 fw-medium"
                isRoundedPill
              >
                Login
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
