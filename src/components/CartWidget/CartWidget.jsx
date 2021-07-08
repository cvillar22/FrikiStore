import React from "react";
import Carrito from "../../Assets/Cart.svg";

const CartWidget = () => {
  return (
      <img title="Cart"  className="cartImg" src={Carrito} alt="Cart" />
  );
};

export default CartWidget;