import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartFull = () => {
  const { cart, getItemsCount, calculateTotal, removeItem, clearCart, hasItemInCart } = useCartContext();
  
   const removeFromCart = (event) => {
    const productID = +event.target.value;
    removeItem(productID);
  };


  const generateRow = (item) => {
    return (
      <tr key={item.id}>
        <td>{item.title}</td>
        <td>{item.quantity}</td>
        <td>${item.price}</td>
        <td>${item.quantity * item.price}</td>
        <td>
          <button
            className="button is-danger is-dark mx-2"
            value={item.id}
            onClick={removeFromCart}
          >
            Borrar
          </button>
          <Link to={`/`}>
            <button
              role="link"
              className="button is-warning is-dark"
              title="Edit order"
              onClick={hasItemInCart}
            >
              Editar
            </button>
          </Link>
        </td>
      </tr>
    );
  };

  return (
    <div className="box">
      <div className="is-flex is-align-items-center is-justify-content-space-between mb-3">
        <p className="is-size-3 p-1 has-text-weight-bold">Carrito</p>
        <p className="is-size-4 p-1">
          {`${getItemsCount()} ${getItemsCount() > 1 ? "items" : "item"}`}
        </p>
      </div>

      <div className="table-container">
        <table className="table is-fullwidth has-text-centered is-hoverable is-striped">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Subtotal</th>
              <th></th>
            </tr>
          </thead>

          <tbody>{cart.map((item) => generateRow(item))}</tbody>

          <tfoot>
            <tr className="has-text-center is-size-5">
              <td colSpan="5">Total: ${calculateTotal()}</td>
            </tr>
          </tfoot>
        </table>

        <button
          type="button"
          className="button is-danger is-dark"
          title="Clear cart"
          onClick={clearCart}
        >
          Vaciar
        </button>
      </div>
    </div>
  );
};

export default CartFull;