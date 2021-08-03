import React, { useState } from "react";
import ItemCount from "./ItemCount";

const CountContainer = ({stock,initial,count, onAdd}) => {
  
  // const [count, setCount] = useState(initial);
  // const updateValue = (e) => setCount(count + Number(e.target.value));

  return (
    <div className="level is-mobile p-1 m-0">
      <ItemCount stock={stock} count={count} initial={initial} onAdd={onAdd} />
    </div>
  );
};

export default CountContainer;