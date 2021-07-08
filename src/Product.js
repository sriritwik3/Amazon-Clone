import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { image, title, category, price } = product;
  const random = Math.floor(Math.random() * 5);
  const rating = new Array(random).fill(1);
  const remaining = new Array(5 - random).fill(1);
  const ratings = Math.floor(Math.random() * 1000);
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
            {rating.map((i, index) => {
              return (
                <span key={index} className="styled_star">
                  &#9733;
                </span>
              );
            })}
            {remaining.map((i, index) => {
              return (
                <span key={index} className="styled_star">
                  &#9734;
                </span>
              );
            })}
            <span className="total_ratings"> {ratings}</span>
          </div>
        </div>
        <button className="product_add">Add to Cart</button>
      </div>
    </>
  );
};

export default Product;
