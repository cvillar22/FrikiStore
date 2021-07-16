import React from "react";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemDetail = ({ title, price, prodImg, stock, children,id,description}) => {
  return (
    <article className="card has-text-centered m-5">

      <header className="card-header is-flex is-justify-content-center">
        <figure className="card-image">
          <img  className="image" src={prodImg} alt="" />
        </figure> 
        <ItemDetailContainer />
      </header>
       <section className="card-content">
        <h3 className="subtitle is-size-4-desktop">{title}</h3>
        <b className="is-block is-size-4-desktop"> ${price} </b>
        <b>{description}</b>
        <small className="tag is-info is-light">stock: {stock}</small>
      </section>

      <footer className="card-footer is-flex-direction-column is-align-items-center">
        <button className="button is-dark is-small p-2 m-4" type="button" title="description" value={id}>Añadir al carro</button> 
      </footer>

    </article>
  );
}

export default ItemDetail;