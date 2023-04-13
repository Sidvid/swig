import React, { useState } from "react";
import { UilAngleDown } from "@iconscout/react-unicons";

function Accordian({ list }) {
  const [activeTab, setActiveTab] = useState(null);
  const clickHandle = (event, index) => {
    event.stopPropagation();
    if (index === activeTab) {
      setActiveTab(null);
      return;
    }
    setActiveTab(index);
  };

  return (
    <div className="accordian_wrapper">
      {list.map((elem, index) => {
        return (
          <div data-testid="acc-test" key={index} className="container">
            <div
              onClick={(e) => clickHandle(e, index)}
              className="title_container"
            >
              <div className="icons">
                <UilAngleDown
                  className={activeTab === index ? "icon_rotate" : ""}
                />
              </div>
              <h3 data-testid="test-title" className="title">
                {elem.title}
              </h3>
            </div>
            {activeTab === index && (
              <div data-testid="test_body" className="body">
                <p>{elem.data}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordian;
