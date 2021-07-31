import React, { useEffect } from "react";
import CartFull from "./CartFull";
import CartEmpty from "./CartEmpty";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {

  const { hasItemsInCart } = useCartContext();
 

  return (
    <div className='container is-max-desktop p-4'>
      {hasItemsInCart() ? <CartFull /> : <CartEmpty />}
    </div>
  );
};

export default Cart;