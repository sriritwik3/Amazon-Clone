import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [outlineStyle, setOutlineStyle] = useState({
    boxShadow: "0 0 0 2pt orangered",
  });
  const onBlur = () => {
    console.log("onblurloki vachamowa");
    setIsFocused(false);
  };
  const onFocus = () => {
    console.log("onfocus loki vacha MOWA");
    setIsFocused(true);
  };
  useEffect(() => {
    isFocused
      ? setOutlineStyle({ boxShadow: "0 0 0 2pt orangered" })
      : setOutlineStyle({ boxShadow: "none" });
  }, [isFocused]);

  return (
    <>
      <nav className="navbar_main">
        <div className="nav_left">
          <img
            src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png"
            alt="amazon.in"
            className="nav_logo"
          />
        </div>
        <div className="nav_fill">
          <div className="nav_search">
            <input type="text" className="nav_search_input" />
            <SearchIcon
              className="nav_search_icon"
              style={outlineStyle}
              onFocus={onFocus}
              onBlur={onBlur}
            ></SearchIcon>
          </div>
        </div>
        <div className="nav_right">
          <div className="nav_option">
            <div className="line1">Hello, Sign in</div>
            <div className="line2">Accounts &amp; Lists</div>
          </div>
          <div className="nav_option">
            <div className="line1">Returns</div>
            <div className="line2">&amp;Orders</div>
          </div>
          <div className="nav_cart">
            <span className="cart_count">0</span>
            <ShoppingCartIcon className="cart_icon"></ShoppingCartIcon>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
