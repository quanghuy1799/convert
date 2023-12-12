import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[24px]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-blue_gray-900",
    indigo_400: "bg-indigo-400 text-gray-200",
    pink_300: "bg-pink-300 shadow-bs",
    deep_orange_500: "bg-deep_orange-500 shadow-bs",
  },
};
const sizes = { xs: "p-[15px]", sm: "p-[33px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "white_A700",
    "indigo_400",
    "pink_300",
    "deep_orange_500",
  ]),
};

export { Button };
