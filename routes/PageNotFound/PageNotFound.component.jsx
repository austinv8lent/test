import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.component";

const PageNotFound = () => (
  <>
    <Breadcrumb />
    <img
      className="img-fluid"
      src={require("../../assets/PageNotFound.png")}
      alt="404"
    />
  </>
);

export default PageNotFound;
