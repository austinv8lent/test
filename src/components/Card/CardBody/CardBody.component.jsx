import React from "react";
import classNames from "../../../utils/class-names";

const CardBody = ({ children, className, ...props }) => {
  const classes = {
    "card-body": true,
    [className]: className,
  };

  return (
    <div className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

export default CardBody;
