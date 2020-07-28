import React, { useState } from "react";
import styled from "styled-components";
import { ApolloConsumer } from "@apollo/react-hooks";
import debounce from "lodash.debounce";
import Downshift from "downshift";
import { useRouter } from "next/router";
import { ItemsDocument, Item } from "generated/graphql";

const SearchInputStyles = styled.div`
  form > div {
    position: relative;
  }
  form input[type="text"] {
    display: block;
    margin: 0 auto;
    width: 100%;
    background-color: lightgray;
  }
  ul {
    padding: 0 25px;
  }
  background-color: whitesmoke;
  .selected {
    transition: 0.2s all ease-in;
    color: black;
    transform: scale(1.02);
  }
  .loading-state {
    background-color: yellow;
  }
  .non-selected {
    background-color: rgba(220, 220, 220, 0.5);
  }
`;
const Search = () => {
  // const [orderBy, setorderBy] = useState({ createdAt: "asc" });
  const [SearchItems, setSearchItems] = useState([]);
  const [loading, setloading] = useState(false);
  const Router = useRouter();

  const onChangeHandler = debounce(async (e, client) => {
    setloading(true);

    const res = await client.query({
      query: ItemsDocument,
      variables: { searchTerm: e.target.value, orderBy: { createdAt: "asc" } },
    });
    setSearchItems(res.data.items);
    setloading(false);
  }, 350);

  return (
    <SearchInputStyles>
      <Downshift
        id="lang-switcher"
        onChange={(item) => {
          Router.push({
            pathname: "/item",
            query: { id: item.id },
          });
        }}
        itemToString={(item) => (item === null ? "" : item.title)}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          highlightedIndex,
          inputValue,
        }) => (
          <div>
            <div>
              <ApolloConsumer>
                {(client) => (
                  <input
                    {...getInputProps({
                      onChange: (e) => {
                        e.persist();
                        onChangeHandler(e, client);
                      },
                      type: "text",
                      name: "searchTerm",
                      placeholder: "Search for Any Product",
                    })}
                  />
                )}
              </ApolloConsumer>
            </div>
            <div>
              {isOpen && (
                <ul className="list-group">
                  {SearchItems.length
                    ? SearchItems.map((item: Item, i) => (
                        <li
                          {...getItemProps({ item })}
                          style={{ padding: "10px" }}
                          className={`list-group-item ${
                            highlightedIndex === i ? "selected" : "non-selected"
                          }`}
                          key={item.id}
                        >
                          <div className="content">
                            <img
                              width="40"
                              style={{ marginRight: "20px" }}
                              src={item.images[0]}
                              alt={item.title}
                            />
                            {item.title}
                          </div>
                        </li>
                      ))
                    : null}
                  {loading && <li>Searching Please Wait....</li>}
                  {SearchItems.length === 0 && !loading && (
                    <li>No Result Found {inputValue}</li>
                  )}
                </ul>
              )}
            </div>
          </div>
        )}
      </Downshift>
    </SearchInputStyles>
  );
};

export default Search;
