import React from "react";

const BlogMenus = () => {
  return (
    <li className="angle-shape">
      <a href="blog.html"> Blog </a>
      <ul className="submenu">
        <li>
          <a href="blog.html">standard style </a>
        </li>
        <li>
          <a href="blog-2-col.html">blog 2 column </a>
        </li>
        <li>
          <a href="blog-3-col.html">blog 3 column </a>
        </li>
        <li>
          <a href="blog-right-sidebar.html">blog right sidebar </a>
        </li>
        <li>
          <a href="blog-details.html">blog details </a>
        </li>
        <li>
          <a href="blog-details-right-sidebar.html">
            blog details right sidebar{" "}
          </a>
        </li>
      </ul>
    </li>
  );
};

export default BlogMenus;
