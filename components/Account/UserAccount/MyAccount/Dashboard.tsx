import React from "react";
import Logout from "./Logout";

interface Props {
  Dashboard: boolean;
  me: any;
}

const UserDashboard = ({ Dashboard, me }: Props) => {
  return (
    <div
      className={`tab-pane fade show ${Dashboard ? "active" : ""}`}
      id="dashboad"
      role="tabpanel"
    >
      <div className="myaccount-content">
        <h3>Dashboard</h3>
        <div className="welcome">
          <p>
            Hello, <strong>{me.name.toUpperCase()}</strong> If Not{" "}
            <strong>{me.name} !</strong> <Logout />
          </p>
        </div>

        <p className="mb-0">
          From your account dashboard. you can easily check & view your recent
          orders, manage your shipping and billing addresses and edit your
          password and account details.
        </p>
      </div>
    </div>
  );
};

export default UserDashboard;
