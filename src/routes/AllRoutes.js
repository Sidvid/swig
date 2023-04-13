import React, { Suspense } from "react";
import {Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

const Home = React.lazy(() => import("../container/Home"));
const Instamart = React.lazy(() => import("../container/Instamart"));
const SingleRestraunt = React.lazy(() =>
  import("../container/SingleRestraunt")
);
const Error = React.lazy(() => import("../components/Error"));

function AllRoutes() {
  return (
    <>
      <Navbar />

      <Suspense fallback={<Loader message={"Please wait!!"} />}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/:id"
            element={
              <PrivateRoute>
                <SingleRestraunt />
              </PrivateRoute>
            }
          />

          <Route path="/instamart" element={<Instamart />} />
          <Route path="*" element={<Error message={"Page not Found!!"} />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default AllRoutes;
