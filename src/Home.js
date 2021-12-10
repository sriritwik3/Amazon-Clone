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
  for (let i = 0; i < products.length; i++) {
    const random = Math.floor(Math.random() * 5);
    products[i].rating = random;
    if (random === 0) products[i].votes = 0;
    else {
      products[i].votes = Math.floor(Math.random() * 1000);
    }
  }
  return (
    <>
      <Header></Header>
      <div className="home">
        <div className="container">
          <img
            className="home_img"
            // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="PrimeVideo"
            // src="https://wallpapercave.com/wp/wp4682578.jpg"
            src="https://images.unsplash.com/photo-1557899563-1940fc95709c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=70"
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
