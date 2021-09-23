import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";

const Website = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default Website;
