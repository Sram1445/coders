import React from "react";

const sizes = {
  textmd: "text-[33px] font-normal not-italic md:text-[31px] sm:text-[29px]",
  textlg: "text-[36px] font-normal not-italic md:text-[34px] sm:text-[32px]",
  textxl: "text-[38px] font-normal not-italic md:text-[36px] sm:text-[34px]",
  text2xl: "text-[41px] font-normal not-italic md:text-[37px] sm:text-[31px]",
  text3xl: "text-[45px] font-normal not-italic md:text-[41px] sm:text-[35px]",
  text4xl: "text-[47px] font-normal not-italic md:text-[43px] sm:text-[37px]",
  text5xl: "text-[52px] font-normal not-italic md:text-[44px] sm:text-[38px]",
};

const Text = ({ children, className = "", as, size = "text2xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-a700 font-sarpanch ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
