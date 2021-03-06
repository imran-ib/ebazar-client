import React, { useState } from "react";

function AdminNotifications() {
  const [ToggleNotifications, setToggleNotifications] = useState(false);
  const [ToggleMessage, setToggleMessage] = useState(false);
  return (
    <>
      {/* <!-- Nav Item - Alerts --> */}
      <li
        onClick={() => setToggleNotifications(!ToggleNotifications)}
        className={`nav-item dropdown no-arrow mx-1 ${
          ToggleNotifications && "show"
        } `}
      >
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="alertsDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={ToggleNotifications ? true : false}
        >
          <i className="fas fa-bell fa-fw"></i>
          {/* <!-- Counter - Alerts --> */}
          <span className="badge badge-danger badge-counter">3+</span>
        </a>
        {/* <!-- Dropdown - Alerts --> */}
        <div
          className={`dropdown-list dropdown-menu dropdown-menu-left shadow animated--grow-in ${
            ToggleNotifications && "show"
          }`}
          aria-labelledby="alertsDropdown"
        >
          <h6 className="dropdown-header">Alerts Center</h6>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="mr-3">
              <div className="icon-circle bg-primary">
                <i className="fas fa-file-alt text-white"></i>
              </div>
            </div>
            <div>
              <div className="small text-gray-500">December 12, 2019</div>
              <span className="font-weight-bold">
                A new monthly report is ready to download!
              </span>
            </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="mr-3">
              <div className="icon-circle bg-success">
                <i className="fas fa-donate text-white"></i>
              </div>
            </div>
            <div>
              <div className="small text-gray-500">December 7, 2019</div>
              $290.29 has been deposited into your account!
            </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="mr-3">
              <div className="icon-circle bg-warning">
                <i className="fas fa-exclamation-triangle text-white"></i>
              </div>
            </div>
            <div>
              <div className="small text-gray-500">December 2, 2019</div>
              Spending Alert: We've noticed unusually high spending for your
              account.
            </div>
          </a>
          <a className="dropdown-item text-center small text-gray-500" href="#">
            Show All Alerts
          </a>
        </div>
      </li>

      {/* <!-- Nav Item - Messages --> */}
      <li
        onClick={() => {
          setToggleMessage(!ToggleMessage);
        }}
        className="nav-item dropdown no-arrow "
      >
        <a
          className={`nav-link dropdown-toggle ${ToggleMessage && "show"}`}
          href="#"
          id="messagesDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={ToggleMessage ? true : false}
        >
          <i className="fas fa-envelope fa-fw"></i>
          {/* <!-- Counter - Messages --> */}
          <span className="badge badge-danger badge-counter">7</span>
        </a>
        {/* <!-- Dropdown - Messages --> */}
        <div
          className={`dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in ${
            ToggleMessage && "show"
          }`}
          aria-labelledby="messagesDropdown"
        >
          <h6 className="dropdown-header">Message Center</h6>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="dropdown-list-image mr-3">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/fn_BT9fwg_E/60x60"
                alt=""
              />
              <div className="status-indicator bg-success"></div>
            </div>
            <div className="font-weight-bold">
              <div className="text-truncate">
                Hi there! I am wondering if you can help me with a problem I've
                been having.
              </div>
              <div className="small text-gray-500">Emily Fowler · 58m</div>
            </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="dropdown-list-image mr-3">
              <img
                width="80"
                className="rounded-circle"
                src="https://source.unsplash.com/AU4VPcFN4LE/60x60"
                alt=""
              />
              <div className="status-indicator"></div>
            </div>
            <div>
              <div className="text-truncate">
                I have the photos that you ordered last month, how would you
                like them sent to you?
              </div>
              <div className="small text-gray-500">Jae Chun · 1d</div>
            </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="dropdown-list-image mr-3">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/CS2uCrpNzJY/60x60"
                alt=""
              />
              <div className="status-indicator bg-warning"></div>
            </div>
            <div>
              <div className="text-truncate">
                Last month's report looks great, I am very happy with the
                progress so far, keep up the good work!
              </div>
              <div className="small text-gray-500">Morgan Alvarez · 2d</div>
            </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="dropdown-list-image mr-3">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                alt=""
              />
              <div className="status-indicator bg-success"></div>
            </div>
            <div>
              <div className="text-truncate">
                Am I a good boy? The reason I ask is because someone told me
                that people say this to all dogs, even if they aren't good...
              </div>
              <div className="small text-gray-500">Chicken the Dog · 2w</div>
            </div>
          </a>
          <a className="dropdown-item text-center small text-gray-500" href="#">
            Read More Messages
          </a>
        </div>
      </li>
    </>
  );
}

export default AdminNotifications;
