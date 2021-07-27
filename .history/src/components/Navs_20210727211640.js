import React from "react";
import { Link } from "react-router-dom";

const LINKS = [];

const Navs = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/starred">Go to home page</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navs;
