import React from "react";
import ProducCard from "../../Utills/ProductCard/ProductCard";
import styled from "styled-components";
import Slider from "react-slick";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_ITEMS } from "../../Shop/Shop";

const RelatedProduct = () => {
  const { loading, error, data } = useQuery(GET_ALL_ITEMS, {
    variables: {
      first: 15
    }
  });
  if (loading) return <p>loading...</p>;
  if (error) return <p> {error.message} </p>;
  if (!data.items) items = null;
  const { items } = data;
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
                        <ProducCard item={item} autoPlay={true} />
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
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    }
  ]
};

const CustumStyles = styled.div`
  display: flex;
`;
export default RelatedProduct;
