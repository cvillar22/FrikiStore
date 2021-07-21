import React from "react";
import { NavLink } from "react-router-dom";

const NavBarCategories = ({ categories }) => {
  return (
    <ul className="navbar-end">
      {categories.map((category) => (
        <li key={category.id} className="navbar-item">
          <NavLink to={`/category/${category.id}`}>
            {category.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavBarCategories;