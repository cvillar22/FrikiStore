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
		<ItemDetail itemFiltered={itemFiltered} />
	</div>
)
}

export default ItemDetailContainer;

