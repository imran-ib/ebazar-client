import React, { useState } from "react";
import SellerDashboard from "../DashboardPages/SellerDashboard/SellerDashboard";
import SideNavMenus from "./SideNavMenus/SideNavMenus";
// import SellerTopNavDashboard from "./SellerDashboardTopNav/SellerDashboardTopNav";
import { useSeller } from "components/Utils/auth";
import AllItems from "components/Account/SellerAccount/Dashboard/DashboardPages/AllItems/AllItems";
import MyProfile from "../DashboardPages/Profile/MyProfile";
import ReturnedItems from "../DashboardPages/ReturningItems/ReturnedItems";

// Don't See Any use for TopNav but if for some reason ever change your mind and want to use it just uncomment it

function SideNav() {
  const [dashboardActive, setDashboardActive] = useState(true);
  const [AllItem, setAllItem] = useState(false);
  const [Profile, setProfile] = useState(false);
  const [Returns, setReturns] = useState(false);
  const [Toggle_Nav, setToggle_Nav] = useState(true);

  const ReturnFunc = () => {
    setReturns(true);
    setProfile(false);
    setAllItem(false);
    setDashboardActive(false);
  };

  const ProfileFunc = () => {
    setProfile(true);
    setAllItem(false);
    setDashboardActive(false);
    setReturns(false);
  };

  const AllItemsFunc = () => {
    setAllItem(true);
    setDashboardActive(false);
    setProfile(false);
    setReturns(false);
  };
  const DashboardFunc = () => {
    setDashboardActive(true);
    setAllItem(false);
    setProfile(false);
    setReturns(false);
  };
  const seller = useSeller();

  return (
    <div id="wrapper">
      <SideNavMenus
        seller={seller}
        AllItemsFunc={AllItemsFunc}
        DashboardFunc={DashboardFunc}
        ProfileFunc={ProfileFunc}
        ReturnFunc={ReturnFunc}
        Toggle_Nav={Toggle_Nav}
        setToggle_Nav={setToggle_Nav}
      />
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}

        <div id="content">
          {/* <SellerTopNavDashboard
            Toggle_Nav={Toggle_Nav}
            setToggle_Nav={setToggle_Nav}
          /> */}
          <div className="container-fluid">
            {dashboardActive ? <SellerDashboard /> : null}
            {AllItem ? <AllItems /> : null}
            {Profile ? <MyProfile seller={seller} /> : null}
            {Returns ? <ReturnedItems /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
