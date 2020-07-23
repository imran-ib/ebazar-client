import React from "react";
import SellerNotifications from "./SellerNotifications/SellerNotifications";
import SellerProfile from "./SellerProfile/SellerProfile";

interface Props {
  Toggle_Nav: boolean;
  setToggle_Nav: React.Dispatch<React.SetStateAction<boolean>>;
}

const SellerTopNavDashboard: React.FC<Props> = ({
  Toggle_Nav,
  setToggle_Nav,
}) => {
  return (
    <nav className="navbar navbar-expand navbar- navbar-light bg-white  mb-4 shadow">
      {/* <!-- Sidebar Toggle (Topbar) --> */}
      <button
        onClick={() => setToggle_Nav(!Toggle_Nav)}
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* <!-- Topbar Navbar --> */}
      <ul className="navbar-nav ml-auto container">
        {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-search fa-fw"></i>
          </a>
          {/* <!-- Dropdown - Messages --> */}
          <div
            className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown"
          >
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        <SellerNotifications />

        <SellerProfile />
      </ul>
    </nav>
  );
};

export default SellerTopNavDashboard;
