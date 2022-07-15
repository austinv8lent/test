import React from "react";

const FormInput = ({ children, ...props }) => (
  <input className="form-control" {...props}>
    {children}
  </input>
);

export default FormInput;
