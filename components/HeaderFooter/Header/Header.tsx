import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./Logo";
import HeaderMobile from "./MobileMenu/HeaderMobile";
import Menus from "./Menus/Menus";
import Cart from "../../Cart/Cart";

interface Props {
  user: any;
  seller: any;
}

const Header: React.FC<Props> = ({ user, seller }) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    //cleanup
    //@ts-ignore
    return window.removeEventListener("scroll", null);
  }, []);

  function handleScroll() {
    const nav = document.querySelector("#Custom--Header--id");
    if (window.scrollY > 200) {
      nav?.classList.add("stick");
    } else {
      nav?.classList.remove("stick");
    }
  }

  return (
    <>
      <header id="Custom--Header--id" className="header-area sticky-bar">
        <div className="main-header-wrap">
          <Container>
            <Row>
              <Logo />
              <Menus user={user} seller={seller} />
              <Col xl={3} lg={3}>
                <div className="header-right-wrap pt-40">
                  <Cart />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* <Search /> */}
      </header>
      <div>
        <HeaderMobile />
      </div>
    </>
  );
};

export default Header;
