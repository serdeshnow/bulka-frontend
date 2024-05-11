import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/about">о нас</Link>
          </li>
          <li className="list_item">
            <Link to="/">контакты</Link>
          </li>
          <li className="list_item">
            <Link to="/catalog">меню</Link>
          </li>
        </ul>
      </nav>
      <Button disabled="true">Войти</Button>
    </header>
  );
}
