import React from "react";
import "./Product.css";
import { useGlobalContext } from "./Context";

const Product = ({ product }) => {
  const { image, title, category, price, votes, rating } = product;
  const filled = new Array(rating).fill(1);
  const remaining = new Array(5 - rating).fill(1);
  const [{ cart }, dispatch] = useGlobalContext();
  const addToCart = () => {
    console.log(cart);
    dispatch({
      type: "ADD_TO_CART",
      product,
    });
  };
  return (
    <>
      <div className="product">
        <div className="product_image">
          <img src={image} alt="product" />
        </div>
        <div className="product_info">
          <div className="product_category">
            <b> {category} </b>
          </div>
          <p className="product_title">{title}</p>
          <div className="product_price">
            <span className="product_rupee">&#x20B9;</span>
            {price}
          </div>
          <div className="product_rating">
            {filled.map((_, index) => {
              return (
                <span key={index} className="styled_star">
                  &#9733;
                </span>
              );
            })}
            {remaining.map((_, index) => {
              return (
                <span key={index} className="styled_star">
                  &#9734;
                </span>
              );
            })}
            <span className="total_ratings"> {votes}</span>
          </div>
        </div>
        <button className="product_add" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Product;
