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

  useEffect(() => {
    requestData()
  }, [])
  console.log(data);

  return (
    <div>
      {data.isLoading ? <Load /> : <ItemList items={data.items} />}
    </div>
  );
};

export default ItemListContainer;