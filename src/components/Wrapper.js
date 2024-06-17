import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="w-3/4 mx-auto relative max-[1085px]:w-5/6">{children}</div>
  );
};

export default Wrapper;
