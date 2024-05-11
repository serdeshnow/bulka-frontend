import React from "react";
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
      <div className="panel_wrapper">
        <nav className="nav_wrapper">
          <ul className="nav_list">
            <li className="list_item">
              <a href="/">Контакты</a>
            </li>
            <li className="list_item">
              <a href="/">Контакты</a>
            </li>
            <li className="list_item">
              <a href="/">Контакты</a>
            </li>
          </ul>
        </nav>
        <Button disabled="true">Войти</Button>
      </div>
    </header>
  );
}
