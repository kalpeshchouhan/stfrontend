import React, { memo } from "react";
import sp from "./reactspinner.module.css";

const Reactspinner = () => {
  return (
    <>
      <div class={sp.spinner}></div>
    </>
  );
};

export default memo(Reactspinner);
