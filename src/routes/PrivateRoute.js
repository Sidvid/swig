import React, { useEffect, useState } from "react";
import { useStore } from "../utils/hooks/Store";
import useHttp from "../utils/hooks/useHttp";
import Loader from "../components/Loader";
import callRestraunt from "../res/Home.js";
import Error from "../components/Error";

function PrivateRoute({ children }) {
  const { store, setStore } = useStore();
  const { isLoading, error, data, fetchData } = useHttp();
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });
  //If user permit for location then data will be fetched as per location otherwise default data 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (!isLoading || !error || !data) {
      callRestraunt({
        fetchData,
        extraInit: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
      });
    }
  }, [location]);

  useEffect(() => {
    let restraunt = data?.data?.cards.find(
      (elem) => elem.cardType === "seeAllRestaurants"
    );

    setStore({
      ...store,
      restrauntData: restraunt?.data?.data?.cards,
      name: "siddhartha",
    });
  }, [data]);
  if (isLoading) {
    return <Loader message={"loading please wait!!"} />;
  }
  if (error) {
    return <Error message={"Unexpected Error occur!!"} />;
  }

  return children;
}

export default PrivateRoute;
