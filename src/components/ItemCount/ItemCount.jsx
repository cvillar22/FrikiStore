import React, { useState} from "react";
import ActionProduct from "./ActionProduct.jsx";

const County = (stock, initial) => {

const [count, setCount]= useState(initial);
const updateCounty = (e)=> setCount(count + Number(e.target.value));

return(
	<div>
		<ActionProduct stock={stock} count={count} addUp= {updateCounty}/>
	</div>
	);

};

export default County;