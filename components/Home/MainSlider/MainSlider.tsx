import React from "react";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import Styles from "styled-components";
import media from "styled-media-query";

const MainSliderStyles = Styles.div`
.small-hero{
  ${media.lessThan("medium")`
 width:100%
  `}
}

`;

function MainSlider() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <MainSliderStyles>
      <div className="slider-area">
        <div className="slider-active owl-carousel nav-style-1">
          <>
            {/*  */}
            <div className="single-slider slider-height-1 bg-paleturquoise">
              <div className="container">
                <div className="row align-items-center">
                  <Fade left duration={2000}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                      <div className="slider-content slider-animated-1">
                        <h1 className="animated">Mega Sale</h1>
                        <p className="animated">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. It is a long established fact
                          that a reader.
                        </p>
                        <div className="slider-btn btn-hover">
                          <Link
                            href={{
                              pathname: "/shop",
                              query: { page: 1 },
                            }}
                          >
                            <a className="animated">
                              Shop Now <i className="sli sli-basket-loaded" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Fade>

                  <Fade right delay={500} duration={2000}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                      <div className="slider-single-img slider-animated-1">
                        <img
                          className="animated small-hero"
                          src="/static/img/slider/800-650.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
            {/*if want to add slider images add here  */}
          </>
        </div>
      </div>
    </MainSliderStyles>
  );
}

export default MainSlider;
