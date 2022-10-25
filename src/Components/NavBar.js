import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline"
    };
  };

  const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "");

  return (
    <nav>
      <NavLink
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        // class={classNameFunc}
        // style={{ navLinkStyles }}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        activeClassName="selected"
        class={classNameFunc}
        to={"/HOCExample"}
      >
        HOCExample
      </NavLink>
      <NavLink
        activeClassName="selected"
        class={classNameFunc}
        to={"/ReactContextExample"}
      >
        Context Example
      </NavLink>
      <NavLink
        activeClassName="selected"
        class={classNameFunc}
        to={"/APIExample"}
      >
        API Example
      </NavLink>
      <NavLink
        activeClassName="selected"
        class={classNameFunc}
        to={"/ParentChildFunc"}
      >
        ParenChildEx
      </NavLink>
    </nav>
  );
};
