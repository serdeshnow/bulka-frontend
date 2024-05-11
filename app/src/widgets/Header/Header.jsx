import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";
import Button from "../Button/Button.jsx";
import "./Header.css";

export default function Header({ transparent = false }) {
  return (
    <header className="header">
      <div className="img_wrapper">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <nav className="nav_wrapper">
        <ul className="nav_list">
          <li className="list_item">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "li_link_active" : "")}
            >
              о нас
            </NavLink>
          </li>
          <li className="list_item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "li_link_active" : "")}
            >
              контакты
            </NavLink>
          </li>
          <li className="list_item">
            <NavLink
              to="/catalog"
              className={({ isActive }) => (isActive ? "li_link_active" : "")}
            >
              меню
            </NavLink>
          </li>
        </ul>
      </nav>
      <Button disabled="true">Войти</Button>
    </header>
  );
}
