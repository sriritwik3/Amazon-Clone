import React, { useState, useEffect } from "react";
import "./Header.css";
import { useGlobalContext } from "./Context";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";
import { auth } from "./firebase";

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [{ cart, user }] = useGlobalContext();

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

  const handleAuth = () => {
    if (user) auth.signOut();
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
        <NavLink to="/">
          <div className="nav_left">
            <img
              src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png"
              alt="amazon.in"
              className="nav_logo"
            />
          </div>
        </NavLink>

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
          <a
            href={!user && "/login"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="nav_option" onClick={handleAuth}>
              <div className="line1">Hello, {user ? user.email : "Guest"}</div>
              <div className="line2">{user ? "Sign Out" : "Sign In"}</div>
            </div>
          </a>
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
