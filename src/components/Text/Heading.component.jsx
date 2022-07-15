import React from "react";
import classNames from "../../utils/class-names";

const Heading = ({ children, level = 1, ...props }) => {
  const classes = {
    [`h${level}`]: level,
  };

  return (
    <p className={classNames(classes)} {...props}>
      {children}
    </p>
  );
};

export default Heading;
