import React, { useEffect, useState } from "react";
import Load from "../Load/Load";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  
  const { id } = useParams();

  const [data, setData] = useState({
    items: [],
    isLoading: true,
  });

  const requestData = () => {
    setTimeout(function startFetch() {
      fetch("/products.json")
        .then((response) => response.json())
        .then((json) => {
          const products = id
        ? json.filter((product) => product.category === +id)
        : json;
          setData({ items: json, isLoading: false })
        });
    }, 2000);
  };
  

  useEffect(() => {
    requestData()
  }, [id])

  return (
    <div>
      {data.isLoading ? <Load /> : <ItemList items={data.items} />}
    </div>
  );
};

export default ItemListContainer;