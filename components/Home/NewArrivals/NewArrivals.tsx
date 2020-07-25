import React from "react";
import Slider from "react-slick";
import { Item } from "generated/graphql";
import ItemCard from "components/Item/ItemCard/ItemCard";
import shuffle from "lodash.shuffle";

interface Props {
  items: Item[];
}

const NewArrivals: React.FC<Props> = ({ items }) => {
  const NewItems = shuffle(items);
  return (
    <div className="product-area pt-95 pb-70">
      <div className="container">
        <div className="section-title text-center pb-60">
          <h2>New Arrivals</h2>
          <p>
            {" "}
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classNameical
          </p>
        </div>
        <div className="arrivals-wrap scroll-zoom">
          <div className="ht-products product-slider-active owl-carousel">
            <Slider {...settings}>
              {items &&
                NewItems.map((item, i) => (
                  <ItemCard autoPlay={true} item={item} key={item.id} />
                ))}
            </Slider>
          </div>
        </div>
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

export default NewArrivals;
