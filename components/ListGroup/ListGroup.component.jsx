import React from "react";

const ListGroup = ({ children, ...props }) => (
  <ul className="list-group list-group-flush" {...props}>
    {children}
  </ul>
);

export default ListGroup;
