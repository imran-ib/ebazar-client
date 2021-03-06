import React from "react";
import TopNav from "components/HeaderFooter/TopNavbar/TopNav";
import { useUser, useSeller } from "components/Utils/auth";
import Footer from "components/HeaderFooter/Footer/Footer";
import Header from "components/HeaderFooter/Header/Header";
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const user: any = useUser();
  const seller: any = useSeller();

  return (
    <>
      <TopNav user={user} seller={seller} />
      <Header user={user} seller={seller} />
      {children} <Footer />
    </>
  );
};

export default Layout;
