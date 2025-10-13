import React from "react";

const Divider = () => {
  return (
    <div className="relative w-full h-[1px] my-16">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[red] to-transparent opacity-60"></div>
    </div>
  );
};

export default Divider;
