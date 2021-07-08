import React, { Fragment } from "react";

const ActionProduct = ({ stock, count, addUp }) => {
  return (
    <Fragment>
      <button
        className="level-item button is-info is-normal m-0" type="button" value={1}
        disabled={count >= stock} onClick={addUp} title="Sum Product">
        +
      </button>
      <small className="level-item tag is-white is-large m-0">{count}</small>
      <button
        className="level-item button is-info is-normal m-0" type="button" value={-1} disabled={count <= 0}
        onClick={addUp} title="Less Product">
        -
      </button>
    </Fragment>
  );
};

export default ActionProduct;
