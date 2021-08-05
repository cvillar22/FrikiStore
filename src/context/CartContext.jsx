import React, {createContext, useState,useEffect, useContext} from "react";

export const Context = createContext();

export const useCartContext = () => useContext(Context);

export const CartContext = ({children})=>{
   
    const [cart, setCart] = useState([]);

    const retrieveFromStorage = () => {
    const savedCart = JSON.parse(sessionStorage.getItem("react-cart"));
    if (savedCart && savedCart.length > 0) setCart(savedCart);
    };

    const updateCart = (newState) => {
    setCart(newState);
    sessionStorage.setItem("react-cart", JSON.stringify(newState));
    };

    useEffect(retrieveFromStorage, []);
    
    const addItem = (newItemFiltered) => {
        if (isInCart(newItemFiltered.id)) {
          updateItem(newItemFiltered);
        } else {
          updateCart([...cart, newItemFiltered]);
        }
    };
    
    const removeItem = (id) => {
        const itemsFiltered = cart.filter((itemFiltered) => itemFiltered.id !== id);
        updateCart(itemsFiltered);
    };

    const clearCart = () => {
        setCart([]);
        sessionStorage.removeItem("react-cart");
    };

    const updateItem = (newItemFiltered) => {
        const cartCopy = cart.slice();
        const index = cartCopy.findIndex((itemFiltered) => itemFiltered.id === newItemFiltered.id);
        if (cartCopy[index].quantity !== newItemFiltered.quantity) {
         cartCopy.splice(index, 1, newItemFiltered);
        updateCart(cartCopy);
    };
    };


    const hasItemsInCart = () => cart.length > 0;

    const isInCart = (id) => cart.some((item) => item.id === id);

    const calculateTotal = () => cart.reduce((current, item) => current + item.price * item.quantity, 0);
  
    const getItemsCount = () =>  cart.length;

    return(
    <Context.Provider value ={{cart,
        addItem,
        removeItem,
        getItemsCount,
        hasItemsInCart,
        calculateTotal,
        clearCart,}}>
        {children}
    </Context.Provider>
    );
};