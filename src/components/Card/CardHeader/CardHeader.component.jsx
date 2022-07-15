import React from "react";
import classNames from "../../../utils/class-names";

const CardHeader = ({ children, className, ...props }) => {
  const classes = {
    cardHeader: "card-header",
    [className]: className,
  };

  return (
    <div className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

export default CardHeader;
