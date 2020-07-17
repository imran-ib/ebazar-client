import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const HeaderSliderStyles = styled.div`
  text-align: center;
  background-color: #1c2431;
  border-bottom: 1px solid black;
  height: 30px;
  .text {
    font-size: 12px;
    color: white;
    font-weight: 200;
  }
`;

const HeaderSlider = () => {
  return (
    <HeaderSliderStyles>
      <Carousel indicators={false}>
        <Carousel.Item>
          <p className="text mt-2">
            We are fully operational and trying to fulfill your purchases at the
            earliest.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <p className="text mt-2">
            PLEASE NOTE - We are operational for placing orders. Delivery may
            impact due to the unprecedented situation caused by COVID-19. eBazar
            wishes you a healthy and happy life. Stay Safe!
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <p className="text mt-2">
            We are fully operational and trying to fulfill your purchases at the
            earliest.
          </p>
        </Carousel.Item>
      </Carousel>
    </HeaderSliderStyles>
  );
};

export default HeaderSlider;
