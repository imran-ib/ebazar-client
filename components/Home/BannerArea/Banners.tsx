import React from "react";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";

const Banners = () => {
  return (
    <>
      <div className="banner-area pt-100 pb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <Zoom duration={2000}>
                <div className="single-banner mb-30 scroll-zoom">
                  <Link href="/shop">
                    <a>
                      <img
                        style={{ width: "570px", height: "260px" }}
                        className="animated"
                        src="/static/img/banner/item_XL_.jpg"
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
              </Zoom>
              <Zoom duration={2000}>
                <div className="single-banner mb-30 scroll-zoom">
                  <Link href="/shop">
                    <a>
                      <img
                        style={{ width: "570px", height: "260px" }}
                        className="animated"
                        src="/static/img/banner/banner-grey.jpg"
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
              </Zoom>
            </div>
            <div className="col-lg-6 col-md-6">
              <Zoom duration={2000}>
                <div
                  style={{
                    color: "white"
                  }}
                  className="single-banner mb-30 scroll-zoom"
                >
                  <Link href="/shop">
                    <a>
                      <img
                        style={{ width: "570px", height: "260px" }}
                        className="animated"
                        src="/static/img/banner/banner-web_615x240_en.jpg"
                        alt=""
                      />
                    </a>
                  </Link>
                  <div className="banner-content banner-position-2">
                    <a>Shop Now</a>
                  </div>
                </div>
              </Zoom>

              <Zoom duration={2000}>
                <div className="single-banner mb-30 scroll-zoom">
                  <Link href="/shop">
                    <a>
                      <img
                        style={{ width: "570px", height: "260px" }}
                        className="animated"
                        src="/static/img/banner/iphone_web_615x240.jpg"
                        alt=""
                      />
                    </a>
                  </Link>
                  <div className="banner-content banner-position-2">
                    <a>Shop Now</a>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banners;
