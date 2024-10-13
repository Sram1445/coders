import React from "react";

const sizes = {
  textxs: "text-[12px] font-medium",
  texts: "text-[13px] font-medium",
  headingxs: "text-[19px] font-semibold",
  headings: "text-[23px] font-bold md:text-[21px]",
  headingmd: "text-[27px] font-semibold md:text-[25px] sm:text-[23px]",
  headinglg: "text-[29px] font-bold md:text-[27px] sm:text-[25px]",
  headingxl: "text-[31px] font-semibold md:text-[29px] sm:text-[27px]",
  heading2xl: "text-[58px] font-bold md:text-[50px] sm:text-[44px]",
  heading3xl: "text-[69px] font-bold md:text-[48px]",
  heading4xl: "text-[90px] font-bold md:text-[48px]",
  heading5xl: "text-[92px] font-bold md:text-[48px]",
};

const Heading = ({ children, className = "", size = "headings", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-a700_19 font-sarpanch ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
