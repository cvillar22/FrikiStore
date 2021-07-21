import React from "react";
import ItemCountContainer from "../ItemCount/ItemCountContainer";
import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {

    return (
        <div className="column is-flex is-gap is-justify-content-center ">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;