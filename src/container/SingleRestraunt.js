import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useStore } from "../utils/hooks/Store";
import Card from "../components/Card";
import Error from "../components/Error";
import Name from "../components/Name";

function SingleRestraunt() {
  const location = useLocation();
  const [singleRestrauntData, setSingleRestrauntData] = useState(null);
  const { store, setStore } = useStore();

  useEffect(() => {
    let singleRestruant =
      store?.restrauntData?.length > 0 &&
      store?.restrauntData?.find(
        (restraunt) => restraunt?.data?.id === location.pathname.split("/")[1]
      );

    if (singleRestruant) {
      setSingleRestrauntData(singleRestruant);
      return;
    }

    setSingleRestrauntData(-1);
  }, [location, store]);

  return (
    <div className="single_wrapper">
      <Name name={store.name} />
      {singleRestrauntData != -1 ? (
        singleRestrauntData && (
          <Card data={singleRestrauntData && singleRestrauntData} />
        )
      ) : (
        <Error message={"Restraunt not found"} />
      )}
    </div>
  );
}

export default SingleRestraunt;
