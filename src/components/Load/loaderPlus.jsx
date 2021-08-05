import React from "react";
import Load from "../Load/Load";
import { useContextData } from "../../context/contextData";

const loaderPlus = (Component) => {
  return function ComponentLoaderPlus(props) {
    const { isLoading } = useContextData();
    return (
      <>
        {isLoading && <Load />}
        <Component
          {...props}
          visibility={isLoading ? "is-hidden" : "is-visible"}
        />
      </>
    );
  };
};

export default loaderPlus;