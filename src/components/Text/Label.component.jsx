import React from "react";

const Label = ({ children, ...props }) => (
  <label className="form-label" {...props}>
    {children}
  </label>
);

export default Label;
