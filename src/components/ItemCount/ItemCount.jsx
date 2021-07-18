import React, { Fragment } from "react";

const ItemCount = ({ stock, count, onAdd }) => {
  return (
    <Fragment>
      <button
        className="button is-dark is-small is-rounded"
        type="button"
        value={-1}
        disabled={count <= 1}
        onClick={onAdd}
        title="Rest count"
      >
        -
      </button>
      <small className="tag is-white is-large m-0">{count}</small>
      <button
        className="button is-dark is-small is-rounded"
        type="button"
        value={1}
        disabled={count >= stock}
        onClick={onAdd}
        title="Sum count"
      >
        +
      </button>
    </Fragment>
  );
};

export default ItemCount;