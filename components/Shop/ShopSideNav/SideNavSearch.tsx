import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

function SideNavSearch() {
  const { register, handleSubmit } = useForm();
  const Router = useRouter();

  const onSubmit = (data: { searchTerm: string }) => {
    Router.push({
      pathname: "/shop/list",
      query: { searchTerm: data.searchTerm },
    });
  };

  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Search </h4>
      <div className="pro-sidebar-search mb-50 mt-25">
        <form
          //@ts-ignore
          onSubmit={handleSubmit(onSubmit)}
          className="pro-sidebar-search-form"
          method="POST"
        >
          <input
            ref={register}
            name="searchTerm"
            type="text"
            placeholder="Search here..."
          />

          <button>
            <i className="sli sli-magnifier" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SideNavSearch;
