import React from "react";
import classNames from "../../utils/class-names";

const Card = ({ children, className, ...props }) => {
  const classes = {
    card: true,
    [className]: className,
  };

  return (
    <div className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

export default Card;
