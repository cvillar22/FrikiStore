import React,{useState} from "react";
import ItemCountContainer from '../ItemCount/ItemCountContainer';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({item}) => {

  
  const [count, setCount] = useState(1);
  const updateCount = (event)=> setCount(count + +event.target.value);
 
  const [finished, setFinished] = useState(false);
  
  const handleState = () =>setFinished(!finished);

  const {addItem} = useCartContext();

  const handleSend = () => {
    const newItemFiltered = {...item, quantity: count};
    addItem(newItemFiltered);
  };

 return (
    <article className="cardDetail">
      <header className="card-header is-flex is-justify-content-center">
        <figure className="card-image justify-content-center">
        <img  className="image" src={item.prodImg} alt="" />
        </figure> 
      </header>
       <section className="card-content">
        <h3 className="subtitle is-size-4-desktop">{item.title}</h3>
        <b className="is-block is-size-4-desktop"> ${item.price} </b>
        <b>{item.description}</b>
        <div><small className="tag is-info is-light">stock: {item.stock}</small></div>
      </section>
      <footer className="card-footer is-flex-direction-column is-align-items-center">
      {!finished ? ( 
      <>
      <ItemCountContainer stock={item.stock} initial={1} count={count} onAdd={updateCount} />
      <button  onClick ={()=>{handleState(); handleSend(item);}} className="button is-dark is-normal p-2 m-4" type="button">Comprar</button> 
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