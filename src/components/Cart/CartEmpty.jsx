import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="container has-text-centered">
      <h2 className="title">No hay productos para comprar</h2>
      <Link to="/">
        <button role="link" className="button is-dark">
          Ver Productos
        </button>
      </Link>
    </div>
  );
};

export default CartEmpty;