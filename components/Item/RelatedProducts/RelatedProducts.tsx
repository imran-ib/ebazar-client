import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ItemCard from "../ItemCard/ItemCard";
import { useItemsQuery } from "generated/graphql";

const RelatedProduct = () => {
  const { loading, error, data } = useItemsQuery({
    variables: {
      first: 15,
    },
  });
  if (loading) return <p>loading...</p>;
  if (error) return <p> {error.message} </p>;
  const items = data?.items;
  return (
    <div className="product-area pb-70">
      <div className="container">
        <div className="section-title text-center pb-60">
          <h2>People Also Viewes These Items</h2>
          <p>
            {" "}
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classNameical
          </p>
        </div>
        <div className="arrivals-wrap scroll-zoom">
          <div className="ht-products product-slider-active ">
            <div className="mt-35">
              <>
                <Slider {...settings}>
                  {items &&
                    items.map((item, i) => (
                      <div key={item.id} className="item">
                        {/* 
                        // @ts-ignore */}
                        <ItemCard item={item} autoPlay={true} />
                      </div>
                    ))}
                </Slider>
              </>
            </div>
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

const CustumStyles = styled.div`
  display: flex;
`;
export default RelatedProduct;
