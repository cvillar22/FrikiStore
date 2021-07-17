import React, {useState,useEffect} from "react";
import {useParams} from "react-router";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = (props)=>{
	const {id} = useParams ();
	const[detailProd, setDetailProd] = useState([]);
	const[itemFiltered, setItemFiltered] = useState();
	
	const getDetailProd = () =>{
		fetch("/products.json")
		.then((res)=> res.json())
		.then((json)=>setDetailProd(json));	
}

console.log(id);
console.log(detailProd);
console.log(itemFiltered);

useEffect(() =>{ 
	const getFilter = (items) => {
		const f = items.find(prod => prod.id === id);
		setItemFiltered(f);
	}
	getDetailProd()
	getFilter(detailProd)
},[])
 
return(
	<div className ="container">
		{/*<ItemDetail itemFiltered={itemFiltered} />*/} hola
	</div>
)
}

export default ItemDetailContainer;

