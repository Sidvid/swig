import React from "react";
import Accordian from "../components/Accordian";
import accordianData from "../utils/constant/accordian";

function Instamart() {
  return (
    <div data-testid="accordian_test" className="instamart_wrapper">
      <div className="accordian">
        <Accordian list={accordianData} />
      </div>
    </div>
  );
}

export default Instamart;
