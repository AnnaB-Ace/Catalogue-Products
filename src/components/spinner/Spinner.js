import React from "react";

const Spinner = ({ magin }) => {
  return (
    <div
      className="text-center"
      style={{ margin: magin || "0px", width: "50px" }}
    >
      <div
        className="spinner-border spinner-border-sm text-dark"
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
