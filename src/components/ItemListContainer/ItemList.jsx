import React from "react";
import ItemCountContainer from "../ItemCount/ItemCountContainer";
import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {

    const generateItem = item => {
        return (
            <Link key={item.id} to={'item/${item.title}'} className="column is-flex is-gap is-justify-content-center">
                <Item {...item}>
                    <ItemCountContainer stock={item.stock} initial={1} />
                </Item>
            </Link>
        )
    };

    return (
        <div className="column is-flex is-justify-content-center ">
            {items.map(generateItem)}
        </div>
    );
};

export default ItemList;