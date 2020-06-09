import React from "react";
import { Col } from "react-bootstrap";
import CategoriesMenu from "./CategoriesMenu";
import CatalogueMene from "./CatalogueMene";
import NewArrivalsMenu from "./NewArrivalsMenu";
import PagesMenus from "./PagesMenus";
import Link from "next/link";
import { User, Seller } from "generated/graphql";

interface Props {
  user: User;
  seller: Seller;
}

const Menus: React.FC<Props> = ({ user, seller }) => {
  return (
    <Col xl={7} lg={7}>
      <div className="main-menu">
        <nav>
          <ul>
            <li className="angle-shape">
              <Link href="/shop">
                <a>Shop</a>
              </Link>
            </li>
            <CategoriesMenu />
            <CatalogueMene />
            <NewArrivalsMenu />
            <PagesMenus user={user} seller={seller} showPagesLink={true} />
          </ul>
        </nav>
      </div>
    </Col>
  );
};

export default Menus;
