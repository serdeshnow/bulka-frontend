import React from "react";
import logo from "../../assets/svg/logo.svg";
import Button from "../Button/Button.jsx";
<<<<<<< HEAD
import "./Header.css"
=======
import "./Header.css";
>>>>>>> be997231c1cfe32377f730ed37d502cf53ee86d7

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
              <a href="/">о нас</a>
            </li>
            <li className="list_item">
              <a href="/">контакты</a>
            </li>
            <li className="list_item">
              <a href="/">меню</a>
            </li>
          </ul>
        </nav>
        <Button disabled="true">Войти</Button>
    </header>
  );
}
