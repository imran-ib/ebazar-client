import React, { useState } from "react";
import AdminDashboard from "../AdminPages/AdminDashboard/AdminDashboard";
import SideNavMenus from "./SideNavMenus/SideNavMenus";
import AdminTopNav from "./AdminTopNav/AdminTopNav";
import Roles from "../AdminPages/Role/Roles";
import AllItems from "../AdminPages/AllItems/AllItems";
import Permissions from "../AdminPages/Permissions/Permissions";



function SideNav() {
  const [dashboardActive, setDashboardActive] = useState(true);
  const [RoleActive, setRoleActive] = useState(false);
  const [PermissionsActive, setPermissionsActive] = useState(false);
  const [AllItemsActive, setAllItemsActive] = useState(false);
  const [Toggle_Nav, setToggle_Nav] = useState(true);

  const RoleFunc = () => {
    setRoleActive(true);
    setDashboardActive(false);
    setAllItemsActive(false)
    setPermissionsActive(false)
  };
  const DashboardFunc = () => {
    setDashboardActive(true);
    setRoleActive(false);
    setAllItemsActive(false)
    setPermissionsActive(false)
  };
  const AllItemsFunc = () => {
    setAllItemsActive(true)
    setDashboardActive(false);
    setRoleActive(false);
    setPermissionsActive(false)
  };
  const PermissionsFunc = () => {
    setPermissionsActive(true)
    setAllItemsActive(false)
    setDashboardActive(false);
    setRoleActive(false);
  };

  return (
    <div id="wrapper">
      <SideNavMenus
        RoleFunc={RoleFunc}
        AllItemsFunc={AllItemsFunc}
        DashboardFunc={DashboardFunc}
        PermissionsFunc={PermissionsFunc}
        Toggle_Nav={Toggle_Nav}
        setToggle_Nav={setToggle_Nav}
      />
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}

        <div id="content">
          <AdminTopNav Toggle_Nav={Toggle_Nav} setToggle_Nav={setToggle_Nav} />
          <div className="container-fluid">
            {dashboardActive ? <AdminDashboard /> : null}
            {RoleActive ? <Roles /> : null}
            {AllItemsActive ? <AllItems /> : null}
            {PermissionsActive ? <Permissions /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
