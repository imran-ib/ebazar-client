import React from "react";
import SideNavSearch from "./SideNavSearch";
import SideNavTags from "./Tags";
import PriceRange from "./PriceSlider";

interface Props {
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMAxPrice: React.Dispatch<React.SetStateAction<number>>;
  MinPrice: number;
  MAxPrice: number;
}
const ShopSideNav: React.FC<Props> = ({
  setMinPrice,
  setMAxPrice,
  MinPrice,
  MAxPrice,
}) => {
  return (
    <div className="sidebar-style mr-30">
      <SideNavSearch />

      <div className="sidebar-widget">
        <div className="sidebar-widget-list mt-30">
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" />{" "}
                <a>
                  Apple <span>4</span>{" "}
                </a>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" />{" "}
                <a>
                  Microsoft <span>5</span>
                </a>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" />{" "}
                <a>
                  Nike <span>6</span>{" "}
                </a>
                <span className="checkmark" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-widget mt-45">
        <h4 className="pro-sidebar-title mb-5">Filter By Price </h4>

        <PriceRange
          setMinPrice={setMinPrice}
          setMAxPrice={setMAxPrice}
          MinPrice={MinPrice}
          MAxPrice={MAxPrice}
        />
      </div>
      <div className="sidebar-widget mt-50">
        <h4 className="pro-sidebar-title">Colour </h4>
        <div className="sidebar-widget-list mt-20">
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" />{" "}
                <a href="#">
                  Green <span>7</span>{" "}
                </a>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" />{" "}
                <a href="#">
                  Cream <span>8</span>{" "}
                </a>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" />{" "}
                <a href="#">
                  Blue <span>9</span>{" "}
                </a>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" />{" "}
                <a href="#">
                  Black <span>3</span>{" "}
                </a>
                <span className="checkmark" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-widget mt-40">
        <h4 className="pro-sidebar-title">Size </h4>
        <div className="sidebar-widget-list mt-20">
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" />{" "}
                <a href="#">
                  XL <span>4</span>{" "}
                </a>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" />{" "}
                <a href="#">
                  L <span>5</span>{" "}
                </a>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" />{" "}
                <a href="#">
                  SM <span>6</span>{" "}
                </a>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" />{" "}
                <a href="#">
                  XXL <span>7</span>{" "}
                </a>
                <span className="checkmark" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <SideNavTags />
    </div>
  );
};

export default ShopSideNav;
