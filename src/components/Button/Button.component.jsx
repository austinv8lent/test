import React from "react";
import classNames from "../../utils/class-names";

const Button = ({
  children,
  className,
  btnStyle = "primary",
  type = "button",
  icon,
  ...props
}) => {
  const classes = {
    button: {
      [`btn btn-${btnStyle}`]: btnStyle,
      [className]: className,
    },
    icon: { "mr-2": children },
  };

  const Icon = icon;

  return (
    <button type={type} className={classNames(classes.button)} {...props}>
      {icon && <Icon className={classNames(classes.icon)} />}
      {children}
    </button>
  );
};

export default Button;
