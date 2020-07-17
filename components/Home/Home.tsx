import React from "react";
import MainSlider from "./MainSlider/MainSlider";
import Banners from "./BannerArea/Banners";
import AllItems from "./AllItems/AllItems";
import Testimonials from "./Testimonials/Testimonials";
import NewArrivals from "./NewArrivals/NewArrivals";
import OfferBanners from "./BannerArea/OfferBanners";
import Features from "./Features/Features";

interface Props {
  items: any;
}

const Home: React.FC<Props> = ({ items }) => {
  return (
    <>
      <MainSlider />
      <Banners />
      <Features />
      {/* 
      // @ts-ignore */}
      <AllItems items={items} />
      <Testimonials />
      {/* 
      // @ts-ignore */}
      <NewArrivals items={items} />
      <OfferBanners />
      <Features />
    </>
  );
};

export default Home;
