import React from "react";

const sizeClasses = {
  txtInterRegular18Gray900: "font-inter font-normal",
  txtInterRegular18Gray900bf: "font-inter font-normal",
  txtCircularStdBook23: "font-circularstd font-medium",
  txtCircularStdBold23Gray900: "font-bold font-circularstd",
  txtCircularStdBold28: "font-bold font-circularstd",
  txtCircularStdBlack24: "font-black font-circularstd",
  txtCircularStdBold14: "font-bold font-circularstd",
  txtCircularStdBold69: "font-bold font-circularstd",
  txtCircularStdBold23: "font-bold font-circularstd",
  txtCircularStdBold28Deeporange500: "font-bold font-circularstd",
  txtCircularStdBold35: "font-bold font-circularstd",
  txtCircularStdBold44: "font-bold font-circularstd",
  txtCircularStdBold55: "font-bold font-circularstd",
  txtCircularStdBold14Gray9007f: "font-bold font-circularstd",
  txtCircularStdBold23Deeporange500: "font-bold font-circularstd",
  txtCircularStdBook23Gray9007f: "font-circularstd font-medium",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
