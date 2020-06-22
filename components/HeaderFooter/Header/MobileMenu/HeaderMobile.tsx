import React, { useState } from "react";
import Logo from "../Logo";
import MobileMenus from "./MobileMenus";
import Cart from "../../../Cart/Cart";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="header-small-mobile">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="mobile-logo">
                <Logo />
              </div>
            </div>
            <div className="col-6">
              <div className="header-right-wrap">
                <Cart />
                <div className="mobile-off-canvas">
                  <a
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className="mobile-aside-button inside"
                  >
                    <i className="sli sli-menu" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`mobile-off-canvas-active  ${isOpen ? "inside" : ""}`}>
        <a onClick={() => setIsOpen(!isOpen)} className="mobile-aside-close">
          <i className="sli sli-close" />
        </a>

        <MobileMenus />
      </div>
    </>
  );
};

export default HeaderMobile;
