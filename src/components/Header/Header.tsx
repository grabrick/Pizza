import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/header__search_logo.svg";
import cart from "../../assets/images/cart.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <NavLink to="/" className="header__navlink">
          <div className="header__container">
            <img className="header__logo" src={logo} alt="header" />
            <div className="header__wrapper">
              <p className="header__title">MILKY PIZZA</p>
              <p className="header__subtitle">Лучшая пицца разработчика</p>
            </div>
          </div>
        </NavLink>
        <div className="header__input">
          <img className="header__search_logo" src={search} alt="search" />
          <input className="header__search" type="text" placeholder="Поиск пиццы" alt="поиск пиццы" />
        </div>
        <NavLink to="/Basket" className="header__navlink">
          <button className="header__cart">
            3000 ₽
            <img className="header__cart_logo" src={cart} alt="cart" />
            10
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
