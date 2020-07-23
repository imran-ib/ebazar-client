import React from "react";
import PieChart from "./PieChar";
import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";

function AdminDashboard() {
  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-2 text-gray-800">IBazar </h1>
      <p className="mb-4">
        This is Demo Project. The Data in charts is not real. .
      </p>

      {/* <!-- Content Row --> */}
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          {/* <!-- Area Chart --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Anual Sales</h6>
            </div>
            <div className="card-body">
              <div className="chart-area">
                <LineChart />
              </div>
              <hr />
            </div>
          </div>

          {/* <!-- Bar Chart --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Monthly Sales
              </h6>
            </div>
            <div className="card-body">
              <div className="chart-bar">
                <PieChart />
              </div>
              <hr />
            </div>
          </div>
        </div>

        {/* <!-- Donut Chart --> */}
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Weekly Sales
              </h6>
            </div>
            {/* <!-- Card Body --> */}
            <div className="card-body">
              <div className="chart-pie pt-4">
                <DoughnutChart />
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
