import React from "react";
import Link from "next/link";
import { Col } from "react-bootstrap";
import Styled from "styled-components";

const NewArrivalsStyles = Styled.li`
margin:0;
.imgDiv {
  >img{
    width:250px;
    height:100px;
    object-fit: contain;
      margin-bottom: 10px;
  }
  transition: transform .2s;
  &:hover{
    > img{
    transform: scale(1.2)
    }
  }

}

`;

const MenuHead = [
  {
    img1: require(`../../../images/banner/mobiles_web_305x110.jpg`),
    img2: require(`../../../images/banner/intel_web_305x110.jpg`),
    img3: require(`../../../images/banner/campaignname_app_435x110.jpg`),
  },

  {
    img1: require(`../../../images/banner/perfumes_web_305x110.jpg`),
    img2: require(`../../../images/banner/cam_app_435x110.jpg`),
    img3: require(`../../../images/banner/campaignname_web_305x110.jpg`),
  },
  {
    img1: require(`../../../images/banner/watches_web_305x110.jpg`),
    img2: require(`../../../images/banner/mobiles_web_305x110.jpg`),
    img3: require(`../../../images/banner/campaignname_web_305x110.jpg`),
  },
];

function NewArrivals() {
  return (
    <NewArrivalsStyles className="angle-shape">
      <Link href="/shop/list">
        <a>
          Exclusive <span>new</span>{" "}
        </a>
      </Link>

      <ul className="mega-menu dd-flex flex-column justify-content-between">
        {MenuHead.map((item: any, i: any) => (
          <li
            className=""
            key={i}
            style={{
              padding: "0",
              width: "30%",
            }}
          >
            <Link href="/shop">
              <a className="flex-fill">
                <Col className="imgDiv" sm={6} lg={6}>
                  <img src={item.img1} />
                </Col>
              </a>
            </Link>
            <Link href="/shop">
              <a className="flex-fill">
                <Col className="imgDiv" sm={6} lg={6}>
                  <img src={item.img2} alt={item.MainHead} />
                </Col>
              </a>
            </Link>
            <Link href="/shop">
              <a className="flex-fill">
                <Col className="imgDiv" sm={6} lg={6}>
                  <img src={item.img3} alt={item.MainHead} />
                </Col>
              </a>
            </Link>

            <ul />
          </li>
        ))}
      </ul>
    </NewArrivalsStyles>
  );
}

export default NewArrivals;
