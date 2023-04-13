import React from "react";

function Error({ message }) {
  return (
    <div data-testid="error" className="error_wrapper">
      <h1>:(</h1>
      <h3>{message}</h3>
    </div>
  );
}

export default Error;
