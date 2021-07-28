import React from "react";
import Carrito from "../../Assets/Cart.svg";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getItemsCount, hasItemsInCart } = useCartContext();
  return (
    <div className=" is-relative block is-flex is-aling-items-center">
      <img title="Cart"  className="cartImg" src={Carrito} alt="Cart" />
      <small
        className={`tag is-small ${ hasItemsInCart() ? "is-info is-light" : "is-invisible"}`}
      >
        {getItemsCount()}
      </small>

    </div>
  );
};

export default CartWidget;