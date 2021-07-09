import React, { useState, useEffect } from "react";
import "./Header.css";
import { useGlobalContext } from "./Context";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [{ cart }] = useGlobalContext();
  const [outlineStyle, setOutlineStyle] = useState({
    boxShadow: "0 0 0 2pt orangered",
    clipPath: "inset(-2pt -2pt -2pt 0)",
  });
  const onBlur = () => {
    setIsFocused(false);
  };
  const onFocus = () => {
    setIsFocused(true);
  };
  const onMouseDown = () => {
    setIsMouseOver(true);
  };
  const onMouseUp = () => {
    setIsMouseOver(false);
  };
  useEffect(() => {
    isFocused
      ? setOutlineStyle({
          boxShadow: "0 0 0 2pt orangered",
          clipPath: "inset(-2pt -2pt -2pt 0)",
        })
      : setOutlineStyle({ boxShadow: "none" });
  }, [isFocused]);
  useEffect(() => {
    isMouseOver
      ? setOutlineStyle({
          boxShadow: "0 0 0 2pt orangered",
        })
      : setOutlineStyle({ boxShadow: "none" });
  }, [isMouseOver]);

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
            <input
              type="text"
              className="nav_search_input"
              onFocus={onFocus}
              onBlur={onBlur}
            />
            <div onFocus={onFocus} onBlur={onBlur}>
              <SearchIcon
                className="nav_search_icon"
                style={outlineStyle}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
              ></SearchIcon>
            </div>
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
            <span className="cart_count">{cart.length}</span>
            <ShoppingCartIcon className="cart_icon"></ShoppingCartIcon>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
