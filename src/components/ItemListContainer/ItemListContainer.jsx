import React from 'react';


const ItemListContainer = ({greeting}) => {
    return (
        <div className="block p-6">
            <div className="box">
                <h2 className="title">{greeting}</h2>
            </div>
        </div>
    )
}

export default ItemListContainer