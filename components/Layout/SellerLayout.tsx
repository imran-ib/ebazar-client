import React from "react";
import TopNav from "components/HeaderFooter/TopNavbar/TopNav";
import { useUser, useSeller } from "components/Utils/auth";
interface Props {
  children: React.ReactNode;
}

const SellerLayout: React.FC<Props> = ({ children }) => {
  const user: any = useUser();
  const seller: any = useSeller();

  return (
    <>
      <TopNav user={user} seller={seller} />
      {children}
    </>
  );
};

export default SellerLayout;
