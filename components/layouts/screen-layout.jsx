import React from "react";

const ScreenLayout = ({ className, children }) => {
  return <div className={`${className} flex flex-col w-full h-auto`}>{children}</div>;
};

export default ScreenLayout;
