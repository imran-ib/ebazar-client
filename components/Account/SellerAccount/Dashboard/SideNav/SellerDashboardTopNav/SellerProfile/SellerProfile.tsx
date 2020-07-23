import React, { useState } from "react";

function SellerProfile() {
  const [Toggle, setToggle] = useState(false);
  return (
    <>
      {/* <!-- Nav Item - User Information --> */}
      <li
        onClick={() => setToggle(!Toggle)}
        className={`nav-item dropdown no-arrow ${Toggle && "show"}`}
      >
        <a
          className="nav-link dropdown-toggle "
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={Toggle ? true : false}
        >
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">
            Valerie Luna
          </span>
          <img
            width="40"
            className="img-profile rounded-circle"
            src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
          />
        </a>
        {/* <!-- Dropdown - User Information --> */}
        <div
          className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${
            Toggle && "show"
          }`}
          aria-labelledby="userDropdown"
        >
          <a className="dropdown-item" href="#">
            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
          </a>
          <a className="dropdown-item" href="#">
            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
            Settings
          </a>
          <a className="dropdown-item" href="#">
            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
            Activity Log
          </a>
          <div className="dropdown-divider"></div>
          <a
            className="dropdown-item"
            href="#"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </a>
        </div>
      </li>
    </>
  );
}

export default SellerProfile;
