import React from "react";

function Loader({ message }) {
  return (
    <div className="loader_wrapper">
      <div className="loading_container">
        <div className="loader"></div>
        <h3>{message}</h3>
      </div>
    </div>
  );
}

export default Loader;
