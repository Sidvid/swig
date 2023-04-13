import React, { useEffect, useState, useMemo } from "react";

import Card from "../components/Card";

import { useNavigate } from "react-router-dom";
import { useStore } from "../utils/hooks/Store";
import useDebounce from "../utils/hooks/useDebounce";
import Error from "../components/Error";

function Home() {
  const navigate = useNavigate();
  const { store, setStore } = useStore();
  const [search, setSearch] = useState("");
  const value = useDebounce(search, 500);

  const onCardClickHandle = (data) => {
    navigate(`/${data?.data?.id}`, {
      replace: true,
      state: data,
    });
  };

  const renderData = useMemo(
    () =>
      store && store.restrauntData && store.restrauntData.length > 0 ? (
        <div data-testid="card_present" className="home_data">
          {store?.restrauntData
            ?.filter((e) =>
              e.data.name.toLowerCase().includes(value.toLowerCase())
            )
            .map((elem, index) => (
              <div key={index} className="card_home">
                <Card  onCardClick={onCardClickHandle} data={elem} />
              </div>
            ))}
        </div>
      ) : (
        ""
      ),
    [store, value]
  );

  return (
    <div data-testid="home_test" className="home_wrapper">
      <input
        className="input"
        name="input"
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search for the Reastraunt"
      />
      {renderData?.props?.children && renderData?.props?.children.length > 0 ? (
        renderData
      ) : (
        <Error message={"Restraunt not found!!"} />
      )}
    </div>
  );
}

export default Home;
