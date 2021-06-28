import React from "react";//que funcione todo lo que está adentro
import "bulma/css/bulma.min.css";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";

const NavBar = () => {
	return(

		<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
  			<div className="navbar-brand">
   				 <a className="navbar-item"><Logo /></a>	 
 			</div>
			<div className="navbar-menu">
    			<div className="navbar-end">
     				<a className="navbar-item">Inicio </a>
     				<a className="navbar-item">Productos</a>
      				<a className="navbar-item">Nosotros</a> 
     				<a className="navbar-item">Contacto</a>
     				<a className="navbar-item"><CartWidget /></a>	
     		 	</div>
   		 	</div>
		</nav>
		);
};

export default NavBar;
