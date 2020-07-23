import React, { useState } from "react";
import Link from "next/link";
import TopNavSearch from "../SellerDashboardTopNav/TopNavSerach/TopNavSearch";

interface Props {
  AllItemsFunc: () => void;
  DashboardFunc: () => void;
  ProfileFunc: () => void;
  ReturnFunc: () => void;
  Toggle_Nav: boolean;
  setToggle_Nav: React.Dispatch<React.SetStateAction<boolean>>;
  seller: any;
}

const SideNavMenus: React.FC<Props> = ({
  AllItemsFunc,
  DashboardFunc,
  ProfileFunc,
  ReturnFunc,
  Toggle_Nav,
  setToggle_Nav,
  seller,
}) => {
  const [Collapse_Comp, setCollapse_Comp] = useState(false);
  const [Show_Comp, setShow_Comp] = useState(true);
  // const [Collapse_Util, setCollapse_Util] = useState(false);
  // const [Show_Util, setShow_Util] = useState(false);
  // const [Collapse_Pages, setCollapse_Pages] = useState(false);
  // const [Show_Pages, setShow_Pages] = useState(false);

  // All the Unnecessary links are commented out/
  // if you ever want to extend this component just uncomment the commented section and go from there

  return (
    <ul
      className={`navbar-nav bg-gradient-info sidebar sidebar-dark accordion ${
        Toggle_Nav ? "" : "toggled"
      }`}
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <Link href="/">
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">{seller?.name}</div>
        </a>
      </Link>
      <hr className="sidebar-divider mt-1" />
      <TopNavSearch />
      <hr className="sidebar-divider mb-2" />

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item">
        <a
          onClick={() => {
            DashboardFunc();
          }}
          className="nav-link"
        >
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Interface</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <a
          onClick={() => {
            setCollapse_Comp(!Collapse_Comp);
            setShow_Comp(!Show_Comp);
          }}
          className={`nav-link  ${Collapse_Comp ? "" : "collapsed"}`}
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </a>
        <div
          id="collapseTwo"
          className={`collapse ${Show_Comp ? "show" : ""}`}
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Seller :</h6>
            <a onClick={() => AllItemsFunc()} className="collapse-item">
              All Items
            </a>
            <a onClick={() => ProfileFunc()} className="collapse-item">
              MyProfile
            </a>
            <a onClick={() => ReturnFunc()} className="collapse-item">
              Returned Items
            </a>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
      {/* <li className="nav-item">
        <a
          onClick={() => {
            setCollapse_Util(!Collapse_Util);
            setShow_Util(!Show_Util);
          }}
          className={`nav-link  ${Collapse_Util ? "" : "collapsed"}`}
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </a>
        <div
          id="collapseUtilities"
          className={`collapse ${Show_Util ? "show" : ""}`}
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <a className="collapse-item" href="utilities-color.html">
              Colors
            </a>
            <a className="collapse-item" href="utilities-border.html">
              Borders
            </a>
            <a className="collapse-item" href="utilities-animation.html">
              Animations
            </a>
            <a className="collapse-item" href="utilities-other.html">
              Other
            </a>
          </div>
        </div>
      </li> */}

      {/* <!-- Divider --> */}
      {/* <hr className="sidebar-divider" /> */}

      {/* <!-- Heading --> */}
      {/* <div className="sidebar-heading">Addons</div> */}

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      {/* <li className="nav-item">
        <a
          onClick={() => {
            setCollapse_Pages(!Collapse_Pages);
            setShow_Pages(!Show_Pages);
          }}
          className={`nav-link collapsed nav-link  ${
            Collapse_Pages ? "" : "collapsed"
          }`}
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
        <div
          id="collapsePages"
          className={`collapse ${Show_Pages ? "show" : ""}`}
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <a className="collapse-item">Login</a>
            <a className="collapse-item">Register</a>
            <a className="collapse-item">Forgot Password</a>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <a className="collapse-item">404 Page</a>
            <a className="collapse-item">Blank Page</a>
          </div>
        </div>
      </li> */}

      {/* <!-- Nav Item - Charts --> */}
      {/* <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </a>
      </li> */}

      {/* <!-- Nav Item - Tables --> */}
      {/* <li className="nav-item active">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </a>
      </li> */}

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button
          onClick={() => setToggle_Nav(!Toggle_Nav)}
          className="rounded-circle border-0"
          id="sidebarToggle"
        ></button>
      </div>
    </ul>
  );
};

export default SideNavMenus;
