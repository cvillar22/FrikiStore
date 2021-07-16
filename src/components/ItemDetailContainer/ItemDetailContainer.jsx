import React, {useState,useEffect} from "react";
import {useParams} from "react-router";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = ()=>{
	const {id} = useParams ();
	const[detailProd, setDetailProd] = useState({});
	
	const getDetailProd = () =>{
		fetch("products.json")
		.then((res)=> res.json())
		.then((json)=>setDetailProd(json),2000);	
}

useEffect(() =>{ getDetailProd(),[]})
 
return(
	<div className ="container">
	<p>
		{ItemDetailContainer.description}
	</p>
	</div>
)
}

export default ItemDetailContainer;

