import React, { useEffect, useState } from "react";
import Load from "../Load/Load";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { fetchFunction } from "../../scripts/functionfetch";

const ItemListContainer = () => {

  const { id } = useParams();

  const [data, setData] = useState({
    items: [],
    isLoading: true,
  });
  const requestData = () => {
    fetchFunction("/products.json", 700, function updateState(json) {
      const products = id
        ? json.filter((product) => product.category === +id)
        : json;
      setData({ items: products, isLoading: false });
    });
  };

  useEffect(requestData, [id]);

  return (
    <div>
      {data.isLoading ? <Load /> : <ItemList items={data.items} />}
    </div>
  );
};

export default ItemListContainer;