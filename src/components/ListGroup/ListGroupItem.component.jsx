import React from "react";

const ListGroupItem = ({ children, ...props }) => (
  <li className="list-group-item" {...props}>
    {children}
  </li>
);

export default ListGroupItem;
