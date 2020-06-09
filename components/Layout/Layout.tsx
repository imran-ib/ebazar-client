import React from "react";
import Meta from "./Meta";
import TopNav from "components/HeaderFooter/TopNavbar/TopNav";
import { useUser, useSeller } from "components/Utils/auth";
import Footer from "components/HeaderFooter/Footer/Footer";
import Header from "components/HeaderFooter/Header/Header";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const user = useUser();
  const seller = useSeller();

  return (
    <>
      <TopNav user={user} seller={seller} />
      <Header user={user} seller={seller} />
      <Meta /> {props.children} <Footer />
    </>
  );
};

export default Layout;
