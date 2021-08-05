import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import loaderPlus from "../Load/loaderPlus";
import { useContextData } from "../../context/contextData";
import { requestProducts } from "../../firebase/firebase";

const ItemListContainer = loaderPlus(({ visibility }) => {
  const { categoryName } = useParams();

  const [itemsFiltered, setItemsFiltered] = useState([]);
  const [allItems, setAllItems] = useState([]);

  const { showLoader, hideLoader } = useContextData();

  const getAllProducts = () => {
    const onResponse = (response) => setAllItems(response);
    requestProducts(onResponse);
  };

  const getProductsByCategory = () => {
    const onResponse = (response) => setItemsFiltered(response);
    const onFinally = () => hideLoader();
    const applyFilter = Boolean(categoryName);

    showLoader();
    requestProducts(onResponse, onFinally, applyFilter, categoryName);
  };

  useEffect(getAllProducts, []);
  useEffect(getProductsByCategory, [categoryName, showLoader, hideLoader]);

  return (
    <div className={`container ${visibility}`}>
      <>
        <ItemList items={itemsFiltered} />
      </>
    </div>
  );
});

export default ItemListContainer;
