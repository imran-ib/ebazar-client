import React from "react";

interface Props {
  Account: boolean;
  me: any;
}

const UserAccountDetails = ({ Account, me }: Props) => {
  return (
    <div
      className={`tab-pane fade show ${Account ? "active" : ""}`}
      id="address-edit"
      role="tabpanel"
    >
      <div className="myaccount-content">
        <h3>Account Details</h3>
        <div className="account-details-form">
          <form action="#">
            <div className="row">
              <div className="col-lg-12">
                <div className="single-input-item">
                  <label htmlFor="last-name" className="required">
                    Name
                  </label>
                  <input type="text" id="last-name" defaultValue={me.name} />
                </div>
              </div>
            </div>
            <div className="single-input-item">
              <label htmlFor="display-name" className="required">
                Display Name
              </label>
              <input type="text" id="display-name" defaultValue={me.name} />
            </div>
            <div className="single-input-item">
              <label htmlFor="email" className="required">
                Email Addres
              </label>
              <input type="email" id="email" defaultValue={me.email} />
            </div>
            <fieldset>
              <legend>Password change</legend>
              <div className="single-input-item">
                <label htmlFor="current-pwd" className="required">
                  Current Password
                </label>
                <input type="password" id="current-pwd" />
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="single-input-item">
                    <label htmlFor="new-pwd" className="required">
                      New Password
                    </label>
                    <input type="password" id="new-pwd" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-input-item">
                    <label htmlFor="confirm-pwd" className="required">
                      Confirm Password
                    </label>
                    <input type="password" id="confirm-pwd" />
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="single-input-item">
              <button className="check-btn sqr-btn ">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAccountDetails;
