import React from "react";
import { FiChevronRight } from "react-icons/fi";
import "../styles/common.scss";

export default function Error() {
  return (
    <div className="error">
      <div className="content">
        <h1>Error Page</h1>{" "}
        <a href="/" className="gbutton">
          Back to Home <FiChevronRight />
        </a>
      </div>
    </div>
  );
}
