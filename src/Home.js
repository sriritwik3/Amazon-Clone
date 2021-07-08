import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  const [products, setProducts] = useState([]);
  const url = "https://fakestoreapi.com/products";
  const fetchProductDetails = async () => {
    try {
      const response = await fetch(url);
      const details = await response.json();
      setProducts(details);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchProductDetails();
  }, []);
  return (
    <>
      <Header></Header>
      <div className="home">
        <div className="container">
          <img
            className="home_img"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="PrimeVideo"
          />
          <div className="home_row">
            {products.map((product) => {
              return <Product product={product} key={product.id}></Product>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
