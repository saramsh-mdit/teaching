import React from "react";
import { RouterProvider } from "react-router-dom";

import "./style.scss";
import router from "./router";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
