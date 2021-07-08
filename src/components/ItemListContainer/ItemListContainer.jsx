import React, { useEffect, useState } from "react";
import Load from "../Load/Load";
import ItemList from "./ItemList";

const ItemListContainer = () => {

  const [data, setData] = useState({
    items: [],
    isLoading: true,
  });

  const requestData = () => {
    setTimeout(function startFetch() {
      fetch("/products.json")
        .then((response) => response.json())
        .then((json) => setData({ items: json, isLoading: false }));
    }, 2000);
  };

  useEffect(requestData, []);

  return (
    <div className= "box">
      {data.isLoading ? <Load /> : <ItemList items={data.items} />}
    </div>
  );
};

export default ItemListContainer;