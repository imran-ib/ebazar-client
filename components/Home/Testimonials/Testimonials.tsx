import React from "react";
import Slider from "react-slick";

const settings = {
  autoplay: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Testimonials = () => {
  return (
    <div
      className="testimonial-area pt-80 pb-95 section-margin-1"
      style={{
        backgroundImage: "url(/static/img/banner/nike.png)",

        opacity: "0.7",
        filter: "alpha(opacity=70)" /* For IE8 and earlier */,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 ml-auto mr-auto">
            <div className="testimonial-active owl-carousel nav-style-1">
              <Slider {...settings}>
                <div className="single-testimonial text-center">
                  <p
                    style={{
                      color: "#fff",
                    }}
                  >
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, didunt.
                  </p>
                  <div className="client-info">
                    <h5
                      style={{
                        color: "#fff",
                      }}
                    >
                      Nikolas Dehlli
                    </h5>
                  </div>
                </div>
                <div className="single-testimonial text-center">
                  <p
                    style={{
                      color: "#fff",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat Duis
                    aute irure dolor in reprehenderit.
                  </p>
                  <div className="client-info">
                    <h5
                      style={{
                        color: "#fff",
                      }}
                    >
                      Grace Alvarado
                    </h5>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
