import React, {useState,useEffect} from "react";
import {useParams} from "react-router";
import ItemDetail from "./ItemDetail";
import loaderPlus from "../Load/loaderPlus";
import { useContextData } from "../../context/contextData";
import { requestProduct } from "../../firebase/firebase";


const ItemDetailContainer = loaderPlus(({ visibility }) => {
	const { productID } = useParams();
  
	const [product, setProduct] = useState({ attributes: {} });
  
	const { showLoader, hideLoader } = useContextData();
  
	const getProductById = () => {
	  const onResponse = (response) => setProduct({ attributes: response });
	  const onFinally = () => hideLoader();
  
	  showLoader();
	  requestProduct(onResponse, onFinally, productID);
	};
  
	useEffect(getProductById, [productID, showLoader, hideLoader]);
  
	return (
	  <div className={`section ${visibility}`}>
		<ItemDetail item={product.attributes} />
	  </div>
	);
  });
  
  export default ItemDetailContainer;