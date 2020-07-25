import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Account = () => {
  const [Login, setLogin] = useState(true);
  const [Register, setRegister] = useState(false);

  const ActivateLogin = () => {
    setLogin(true), setRegister(false);
  };
  const ActivateRegister = () => {
    setRegister(true);
    setLogin(false);
  };

  return (
    <div className="login-register-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 ml-auto mr-auto">
            <div className="login-register-wrapper">
              <div className="login-register-tab-list nav">
                <a
                  onClick={ActivateLogin}
                  className={`${Login ? "active" : null}`}
                >
                  <h4> login </h4>
                </a>
                <a
                  onClick={ActivateRegister}
                  className={`${Register ? "active" : null}`}
                >
                  <h4> register </h4>
                </a>
              </div>
              <div className="tab-content">
                {Login && (
                  <div
                    id="lg1"
                    className={`tab-pane ${ActivateLogin && "active"}`}
                  >
                    <LoginForm />
                  </div>
                )}

                {Register && (
                  <div
                    id="lg2"
                    className={`tab-pane ${ActivateRegister && "active"}`}
                  >
                    <RegisterForm ActivateLogin={ActivateLogin} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
