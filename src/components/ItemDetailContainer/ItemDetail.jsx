import React,{useState} from "react";
import ItemCountContainer from '../ItemCount/ItemCountContainer';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({itemFiltered}) => {

  
  const [count, setCount] = useState(1);
  const updateCount = (event)=> setCount(count + +event.target.value);
 
  const [finished, setFinished] = useState(false);
  
  const handleState = () =>setFinished(!finished);

  const {addItem} = useCartContext();

  const handleSend = () => {
    const newItemFiltered = {...itemFiltered, quantity: count };
    addItem(newItemFiltered);
  };

 return (
    <article className="cardDetail">
      <header className="card-header is-flex is-justify-content-center">
        <figure className="card-image justify-content-center">
        <img  className="image" src={itemFiltered.prodImg} alt="" />
        </figure> 
      </header>
       <section className="card-content">
        <h3 className="subtitle is-size-4-desktop">{itemFiltered.title}</h3>
        <b className="is-block is-size-4-desktop"> ${itemFiltered.price} </b>
        <b>{itemFiltered.description}</b>
        <div><small className="tag is-info is-light">stock: {itemFiltered.stock}</small></div>
      </section>
      <footer className="card-footer is-flex-direction-column is-align-items-center">
      {!finished ? ( 
      <>
      <ItemCountContainer stock={itemFiltered.stock} initial={1} onAdd={updateCount} />
      <button  onClick ={()=>{handleState(); handleSend(itemFiltered);}} className="button is-dark is-normal p-2 m-4" type="button">Comprar</button> 
      </>
      ):(
      <>
        <Link to ="/cart" onClick={handleState}>
          <button onClick = {handleState} className= "button is-dark is-normal is-hovered m-4">Listo!</button>
        </Link>
        <button onClick = {()=> { handleState()}} className= "button is-danger is-small m-1">Cambiar</button>
      </>
      )}
        </footer>
    </article>
  );
}

export default ItemDetail;