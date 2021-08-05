import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import NavBarCategories from "./NavBarCategories";
import { requestCategories } from "../../firebase/firebase";


const NavBar = () => {

	const [categories, setCategories] = useState(null);
  	const [navbarActive, setNavbarActive] = useState(false);
  	const getCategories = () => {
    const onResponse = (response) => setCategories(response);
    requestCategories(onResponse);
  };

  useEffect(getCategories, []);

	return(

		<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
  			<div className="navbar-brand">
   				 <Link  to="/"><a className="navbar-item"><Logo  className="logoImg" /></a></Link>	 
 			</div>
			<div className="navbar-menu">
    			<div className="navbar-end">
				{categories && <NavBarCategories categories={categories} />}
				<Link to="/cart">
     			<a className="navbar-item"><CartWidget /></a>
				 </Link>	
     		 	</div>
   		 	</div>
		</nav>
		);
};

export default NavBar;
