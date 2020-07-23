import React from "react";

function TopNavSearch() {
  return (
    <div>
      {/* <!-- Top bar Search --> */}
      <div className="input-group">
        <input
          type="text"
          className="form-control bg-light border-0 "
          placeholder="Search for..."
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
      </div>
    </div>
  );
}

export default TopNavSearch;
