import React from "react";
import logo from "../../assets/svg/logo.svg";
import Button from "../Button/Button.jsx";
import AnchorButton from "../AnchorButton/AnchorButton.jsx";
import "./Header.css";

export default function Header() {
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
            <AnchorButton>о нас</AnchorButton>
          </li>
          <li className="list_item">
            <AnchorButton>контакты</AnchorButton>
          </li>
          <li className="list_item">
            <AnchorButton>меню</AnchorButton>
          </li>
        </ul>
      </nav>
      <Button>Войти</Button>
    </header>
  );
}
