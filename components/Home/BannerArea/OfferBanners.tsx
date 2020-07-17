import React from "react";

const OfferBanners = () => {
  return (
    <div className="banner-area pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="single-banner mb-30 scroll-zoom">
              <a href="product-details.html">
                <img src="/static/img/banner/banner-down2.jpg" alt="" />
              </a>
              <div className="banner-content banner-position-3">
                <a href="product-details.html">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="single-banner mb-30 scroll-zoom">
              <a href="product-details.html">
                <img src="/static/img/banner/banner-down.jpg" alt="" />
              </a>
              <div
                style={{
                  color: "white"
                }}
                className="banner-content banner-position-4"
              >
                <a href="product-details.html">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanners;
