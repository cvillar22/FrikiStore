import React, {useState,useEffect} from "react";
import {useParams} from "react-router";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = (props)=>{
	const {id} = useParams ();

	const [product, setProduct] = useState(null);
	
	const getDetailProd = () =>{
		fetch("/products.json")
		.then((res)=> res.json())
		.then((json)=> {
			const productFiltered = json.find( prod => prod.id === +id);
			//const categoryFiltered = json.find (prod => prod.category === +id);
			setProduct(productFiltered);
		});	
	}

	useEffect(getDetailProd,[id])
 
	return(
	<div className ="container">
		{ product && <ItemDetail itemFiltered={product} />}
	</div>
)
}

export default ItemDetailContainer;

