import React, { useState, useEffect } from "react";
import ErrorMessage from "../Utils/ErrorMessage";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import Spinner from "components/Utils/Spinner/Spinner";
import { useTotalItemsCountQuery } from "generated/graphql";
import { PaginationStyles } from "./PaginationStyles";

interface Props {
  orderBy: {}; // apply Filter
  setOrderBy: React.Dispatch<React.SetStateAction<{}>>;
  page?: number; // page query from Url
  SendTrue?: boolean; // we need This To Update The Sort state
}

const PaginationHeader: React.FC<Props> = (props: Props) => {
  const [Sort, setSort] = useState("Sort By");
  const { page, orderBy, setOrderBy, SendTrue } = props;
  const {
    loading: itemCountLoading,
    error: ItemCountError,
    data,
  } = useTotalItemsCountQuery();

  const LowToHigh = "Price Low To Hight ⬇";
  const HighToLow = "Price Hight To Low ⬆  ";
  const AToZ = "A to Z ";
  const ZToA = "Z to A";
  const NewToOld = "New To Old";
  const OldToNew = "Old To New";

  useEffect(() => {
    // We are getting True Value On Query Complete and checking keys and Values and setting sort State Accordingly.
    // After The Component is rendered we are unable to change the sate thats why we are setting setSort in DropDown onClink again
    if (SendTrue) {
      if (
        Object.keys(orderBy)[0] === "price" &&
        Object.values(orderBy)[0] === "asc"
      ) {
        setSort(LowToHigh);
      } else if (
        Object.keys(orderBy)[0] === "price" &&
        Object.values(orderBy)[0] === "desc"
      ) {
        setSort(HighToLow);
      } else if (
        Object.keys(orderBy)[0] === "title" &&
        Object.values(orderBy)[0] === "asc"
      ) {
        setSort(AToZ);
      } else if (
        Object.keys(orderBy)[0] === "title" &&
        Object.values(orderBy)[0] === "desc"
      ) {
        setSort(ZToA);
      } else if (
        Object.keys(orderBy)[0] === "createdAt" &&
        Object.values(orderBy)[0] === "asc"
      ) {
        setSort(NewToOld);
      } else if (
        Object.keys(orderBy)[0] === "createdAt" &&
        Object.values(orderBy)[0] === "desc"
      ) {
        setSort(OldToNew);
      } else {
        setSort("Sort By");
      }
    }
  }, ["orderBy", "setOrderBy"]);

  if (itemCountLoading) return <Spinner />;
  if (ItemCountError) return <ErrorMessage error={ItemCountError} />;

  const TotalItems = data?.itemCount;
  const TotalPages = TotalItems && Math.ceil(TotalItems / 6);

  const OnChangeSort = (sort: {}, sortState: string) => {
    setOrderBy(sort);
    setSort(sortState);
  };
  const SortContent = [
    {
      id: 1,
      sort: { price: "asc" },
      text: LowToHigh,
    },
    {
      id: 2,
      sort: { price: "desc" },
      text: HighToLow,
    },
    {
      id: 3,
      sort: { title: "asc" },
      text: AToZ,
    },
    {
      id: 4,
      sort: { title: "desc" },
      text: ZToA,
    },
    {
      id: 5,
      sort: { createdAt: "asc" },
      text: OldToNew,
    },
    { id: 6, sort: { createdAt: "desc" }, text: NewToOld },
  ];

  return (
    <PaginationStyles>
      <div className="pagiHeadCenter">
        <p style={{ marginTop: "10px" }} className="float-right">
          Showing Page {page} of {TotalPages} Pages
        </p>
        <MDBDropdown>
          <MDBDropdownToggle caret color="white">
            {Sort}
          </MDBDropdownToggle>

          <MDBDropdownMenu basic>
            {SortContent.map((content) => (
              <MDBDropdownItem
                key={content.id}
                onClick={() => OnChangeSort(content.sort, content.text)}
              >
                {content.text}
              </MDBDropdownItem>
            ))}
          </MDBDropdownMenu>
        </MDBDropdown>
      </div>
    </PaginationStyles>
  );
};

export default PaginationHeader;
