import React from "react";
import Slider from "react-slick";
import ItemCard from "components/Item/ItemCard/ItemCard";

import { Item } from "generated/graphql";

interface Props {
  items: Item[];
}

const AllItems: React.FC<Props> = ({ items }) => {
  return (
    <div className="product-area pb-70">
      <div className="container">
        <div className="section-title text-center pb-40">
          <h2>All Products</h2>
          <p>
            {" "}
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classNameical
          </p>
        </div>
        {/* <div className="product-tab-list nav pb-60 text-center">
          <a className="active" href="#product-1" data-toggle="tab">
            <h4>Home appliance </h4>
          </a>
          <a href="#product-2" data-toggle="tab">
            <h4>Kitchen appliance </h4>
          </a>
          <a href="#product-3" data-toggle="tab">
            <h4>Lamps</h4>
          </a>
        </div> */}
        <Slider {...settings}>
          {items &&
            items.map((item) => (
              <ItemCard autoPlay={true} key={item.id} item={item} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
};

export default AllItems;
